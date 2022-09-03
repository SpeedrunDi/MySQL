export const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST';
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
export const GET_NEWS_FAILURE = 'GET_NEWS_FAILURE';

const getNewsRequest = () => ({type: GET_NEWS_REQUEST});
const getNewsSuccess = news => ({type: GET_NEWS_SUCCESS, payload: news});
const getNewsFailure = error => ({type: GET_NEWS_FAILURE, payload: error});

export const GET_NEW_REQUEST = 'GET_NEW_REQUEST';
export const GET_NEW_SUCCESS = 'GET_NEW_SUCCESS';
export const GET_NEW_FAILURE = 'GET_NEW_FAILURE';

const getNewRequest = () => ({type: GET_NEW_REQUEST});
const getNewSuccess = news => ({type: GET_NEW_SUCCESS, payload: news});
const getNewFailure = error => ({type: GET_NEW_FAILURE, payload: error});

export const POST_NEWS_REQUEST = 'POST_NEWS_REQUEST';
export const POST_NEWS_SUCCESS = 'POST_NEWS_SUCCESS';
export const POST_NEWS_FAILURE = 'POST_NEWS_FAILURE';

const postNewsRequest = () => ({type: POST_NEWS_REQUEST});
const postNewsSuccess = () => ({type: POST_NEWS_SUCCESS});
const postNewsFailure = error => ({type: POST_NEWS_FAILURE});

