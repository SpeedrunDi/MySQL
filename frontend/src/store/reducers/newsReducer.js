const initialState = {
  news: null,
  messages: null,
  loading: false,
  error: null
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default newsReducer;