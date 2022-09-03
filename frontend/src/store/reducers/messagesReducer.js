import {GET_MESSAGES_REQUEST, GET_MESSAGES_SUCCESS} from "../actions/messagesActions";
import {GET_ONE_NEWS_FAILURE} from "../actions/newsActions";

const initialState = {
  messages: null,
  loading: false,
  error: null
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES_REQUEST:
      return {...state, loading: true, error: null};
    case GET_MESSAGES_SUCCESS:
      return {...state, loading: false, messages: action.payload};
    case GET_ONE_NEWS_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export default messagesReducer;