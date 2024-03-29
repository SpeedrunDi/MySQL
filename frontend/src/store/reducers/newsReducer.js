import {
  DELETE_NEWS_FAILURE,
  DELETE_NEWS_REQUEST, DELETE_NEWS_SUCCESS,
  GET_NEWS_FAILURE,
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
  GET_ONE_NEWS_FAILURE,
  GET_ONE_NEWS_REQUEST,
  GET_ONE_NEWS_SUCCESS, POST_NEWS_FAILURE, POST_NEWS_REQUEST, POST_NEWS_SUCCESS
} from "../actions/newsActions";

const initialState = {
  news: null,
  post: null,
  loading: false,
  error: null
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_REQUEST:
      return {...state, loading: true, error: null};
    case GET_NEWS_SUCCESS:
      return {...state, loading: false, news: action.payload};
    case GET_NEWS_FAILURE:
      return {...state, loading: false, error: action.payload};
    case GET_ONE_NEWS_REQUEST:
      return {...state, loading: true, error: null};
    case GET_ONE_NEWS_SUCCESS:
      return {...state, loading: false, post: action.payload};
    case GET_ONE_NEWS_FAILURE:
      return {...state, loading: false, error: action.payload};
    case POST_NEWS_REQUEST:
      return {...state, loading: true, error: null};
    case POST_NEWS_SUCCESS:
      return {...state, loading: false};
    case POST_NEWS_FAILURE:
      return {...state, loading: false, error: action.payload};
    case DELETE_NEWS_REQUEST:
      return {...state, loading: true, error: null};
    case DELETE_NEWS_SUCCESS:
      return {...state, loading: false};
    case DELETE_NEWS_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export default newsReducer;