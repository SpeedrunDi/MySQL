import axios from "axios";

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

export const getNews = () => {
  return async dispatch => {
    try {
      dispatch(getNewsRequest());
      const {data} = await axios('http://localhost:8000/news');

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
      const {data} = await axios('http://localhost:8000/news/' + id);
      console.log(data)
      dispatch(getOneNewsSuccess());
    } catch (e) {
      dispatch(getOneNewsFailure(e.message));
    }
  };
};

export const postNews = postData => {
  return async dispatch => {
    try {
      dispatch(postNewsRequest());

      dispatch(postNewsSuccess());
    } catch (e) {
      dispatch(postNewsFailure(e.message));
    }
  };
};

export const deleteNews = () => {
  return async dispatch => {
    try {
      dispatch(postNewsRequest());

      dispatch(postNewsSuccess());
    } catch (e) {
      dispatch(postNewsFailure(e.message));
    }
  };
};