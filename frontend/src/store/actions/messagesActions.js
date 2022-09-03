import axios from "axios";
import {serverApi} from "../../config";

export const GET_MESSAGES_REQUEST = 'GET_MESSAGES_REQUEST';
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';
export const GET_MESSAGES_FAILURE = 'GET_MESSAGES_FAILURE';

export const POST_MESSAGE_REQUEST = 'POST_MESSAGE_REQUEST';
export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS';
export const POST_MESSAGE_FAILURE = 'POST_MESSAGE_FAILURE';

export const DELETE_MESSAGE_REQUEST = 'DELETE_MESSAGE_REQUEST';
export const DELETE_MESSAGE_SUCCESS = 'DELETE_MESSAGE_SUCCESS';
export const DELETE_MESSAGE_FAILURE = 'DELETE_MESSAGE_FAILURE';

const getMessagesRequest = () => ({type: GET_MESSAGES_REQUEST});
const getMessagesSuccess = messages => ({type: GET_MESSAGES_SUCCESS, payload: messages});
const getMessagesFailure = error => ({type: GET_MESSAGES_FAILURE, payload: error});

const postMessageRequest = () => ({type: POST_MESSAGE_REQUEST});
const postMessageSuccess = () => ({type: POST_MESSAGE_SUCCESS});
const postMessageFailure = error => ({type: POST_MESSAGE_FAILURE, payload: error});

const deleteMessageRequest = () => ({type: DELETE_MESSAGE_REQUEST});
const deleteMessageSuccess = () => ({type: DELETE_MESSAGE_SUCCESS});
const deleteMessageFailure = error => ({type: DELETE_MESSAGE_FAILURE, payload: error});

export const getMessages = id => {
  return async dispatch => {
    try {
      dispatch(getMessagesRequest());
      const {data} = await axios( serverApi + '/messages?news_id=' + id);

      dispatch(getMessagesSuccess(data));
    } catch (e) {
      dispatch(getMessagesFailure(e.message));
    }
  };
};

export const postMessage = postData => {
  return async dispatch => {
    try {
      dispatch(postMessageRequest());

      dispatch(postMessageSuccess());
    } catch (e) {
      dispatch(postMessageFailure(e.message));
    }
  };
};

export const deleteMessage = id => {
  return async dispatch => {
    try {
      dispatch(deleteMessageRequest())
      await axios.delete(serverApi + '/messages/' + id);
      dispatch(deleteMessageSuccess());
    } catch (e) {
      dispatch(deleteMessageFailure(e.message));
    }
  };
};