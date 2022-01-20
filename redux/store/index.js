const { createStore, applyMiddleware } = require('redux');
const { HYDRATE, createWrapper } = require('next-redux-wrapper');

const socketIo = require('socket.io-client');

const BASE_URL = 'http://localhost:3000';

const { composeWithDevTools } = require('redux-devtools-extension');
const thunk = require('redux-thunk').default;

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const rootReducer = require('../reducers');

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
      socket: socketIo.connect(BASE_URL),
    };
    return nextState;
  }
  return rootReducer(state, action);
};

const initStore = () => createStore(reducer, bindMiddleware([thunk]));

module.exports = createWrapper(initStore);
