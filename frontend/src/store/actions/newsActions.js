import axios from "axios";
import {serverApi} from "../../config";

export const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST';
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
export const GET_NEWS_FAILURE = 'GET_NEWS_FAILURE';

const getNewsRequest = () => ({type: GET_NEWS_REQUEST});
const getNewsSuccess = news => ({type: GET_NEWS_SUCCESS, payload: news});
const getNewsFailure = error => ({type: GET_NEWS_FAILURE, payload: error});

export const GET_ONE_NEWS_REQUEST = 'GET_NEW_REQUEST';
export const GET_ONE_NEWS_SUCCESS = 'GET_NEW_SUCCESS';
export const GET_ONE_NEWS_FAILURE = 'GET_NEW_FAILURE';

const getOneNewsRequest = () => ({type: GET_ONE_NEWS_REQUEST});
const getOneNewsSuccess = oneNews => ({type: GET_ONE_NEWS_SUCCESS, payload: oneNews});
const getOneNewsFailure = error => ({type: GET_ONE_NEWS_FAILURE, payload: error});

export const POST_NEWS_REQUEST = 'POST_NEWS_REQUEST';
export const POST_NEWS_SUCCESS = 'POST_NEWS_SUCCESS';
export const POST_NEWS_FAILURE = 'POST_NEWS_FAILURE';

const postNewsRequest = () => ({type: POST_NEWS_REQUEST});
const postNewsSuccess = () => ({type: POST_NEWS_SUCCESS});
const postNewsFailure = error => ({type: POST_NEWS_FAILURE, payload: error});

export const DELETE_NEWS_REQUEST = 'DELETE_NEWS_REQUEST';
export const DELETE_NEWS_SUCCESS = 'DELETE_NEWS_SUCCESS';
export const DELETE_NEWS_FAILURE = 'DELETE_NEWS_FAILURE';

const deleteNewsRequest = () => ({type: DELETE_NEWS_REQUEST});
const deleteNewsSuccess = () => ({type: DELETE_NEWS_SUCCESS});
const deleteNewsFailure = error => ({type: DELETE_NEWS_FAILURE, payload: error});

export const getNews = () => {
  return async dispatch => {
    try {
      dispatch(getNewsRequest());
      const {data} = await axios(serverApi + '/news');

      dispatch(getNewsSuccess(data));
    } catch (e) {
      dispatch(getNewsFailure(e.message));
    }
  };
};

export const getOneNews = id => {
  return async dispatch => {
    try {
      dispatch(getOneNewsRequest());
      const {data} = await axios(serverApi + '/news/' + id);

      dispatch(getOneNewsSuccess(data));
    } catch (e) {
      dispatch(getOneNewsFailure(e.message));
    }
  };
};

export const postNews = postData => {
  return async dispatch => {
    try {
      dispatch(postNewsRequest());
      await axios.post(serverApi + '/news', postData);

      dispatch(postNewsSuccess());
    } catch (e) {
      dispatch(postNewsFailure(e.message));
      throw e;
    }
  };
};

export const deleteNews = id => {
  return async dispatch => {
    try {
      dispatch(deleteNewsRequest());
      await axios.delete(serverApi + '/news/' + id);
      dispatch(deleteNewsSuccess());
    } catch (e) {
      dispatch(deleteNewsFailure(e.message));
    }
  };
};