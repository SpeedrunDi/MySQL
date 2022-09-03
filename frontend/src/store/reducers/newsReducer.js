import {
  GET_NEWS_FAILURE,
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
  GET_ONE_NEWS_FAILURE,
  GET_ONE_NEWS_REQUEST,
  GET_ONE_NEWS_SUCCESS
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
    default:
      return state;
  }
};

export default newsReducer;