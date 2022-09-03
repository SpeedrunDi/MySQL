import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {Provider} from "react-redux";
import App from './App';
import thunk from "redux-thunk";
import newsReducer from "./store/reducers/newsReducer";
import messagesReducer from "./store/reducers/messagesReducer";
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  newsData: newsReducer,
  messagesData: messagesReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);
