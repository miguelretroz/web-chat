"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 858:
/***/ ((module) => {


module.exports = (n)=>{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let string = '';
    for(let i = 0; i < n; i += 1){
        string += characters[Math.floor(Math.random() * characters.length)];
    }
    return string;
};


/***/ }),

/***/ 725:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const generateRandomString = __webpack_require__(858);
module.exports = {
    generateRandomString
};


/***/ }),

/***/ 510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(501);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redux_store__WEBPACK_IMPORTED_MODULE_1__);


// import { useStore } from '../redux/store';
// import { store } from '../redux';
const App = ({ Component , pageProps  })=>{
    // const store = useStore(pageProps.initialReduxState);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_redux_store__WEBPACK_IMPORTED_MODULE_1___default().withRedux(App));


/***/ }),

/***/ 131:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const types = __webpack_require__(975);
const newMessage = (payload)=>({
        type: types.NEW_MESSAGE,
        payload
    })
;
const changeNickname = (payload)=>({
        type: types.CHANGE_NICKNAME,
        payload
    })
;
module.exports = {
    types,
    newMessage,
    changeNickname
};


/***/ }),

/***/ 975:
/***/ ((module) => {


module.exports = {
    NEW_MESSAGE: 'NEW_MESSAGE',
    CHANGE_NICKNAME: 'CHANGE_NICKNAME'
};


/***/ }),

/***/ 384:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { combineReducers  } = __webpack_require__(695);
const socket = __webpack_require__(164);
const messages = __webpack_require__(711);
const user = __webpack_require__(560);
const rootReducer = combineReducers({
    socket,
    messages,
    user
});
module.exports = rootReducer;


/***/ }),

/***/ 711:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { types  } = __webpack_require__(131);
const INITIAL_STATE = [];
module.exports = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case types.NEW_MESSAGE:
            return [
                ...state,
                action.payload, 
            ];
        default:
            return state;
    }
};


/***/ }),

/***/ 164:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const socketIo = __webpack_require__(87);
const BASE_URL = 'http://localhost:3000';
const INITIAL_STATE = {
    socket: socketIo.connect(BASE_URL)
};
module.exports = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        default:
            return state;
    }
};


/***/ }),

/***/ 560:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { types  } = __webpack_require__(131);
const { generateRandomString  } = __webpack_require__(725);
const INITIAL_STATE = {
    nickname: generateRandomString(16)
};
module.exports = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case types.CHANGE_NICKNAME:
            return {
                ...state,
                nickname: action.payload
            };
        default:
            return state;
    }
};


/***/ }),

/***/ 501:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { createStore , applyMiddleware  } = __webpack_require__(695);
const { HYDRATE , createWrapper  } = __webpack_require__(648);
const { composeWithDevTools  } = __webpack_require__(173);
const thunk = (__webpack_require__(417)["default"]);
const bindMiddleware = (middleware)=>{
    if (false) {}
    return applyMiddleware(...middleware);
};
const rootReducer = __webpack_require__(384);
const reducer = (state, action)=>{
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        };
        return nextState;
    }
    return rootReducer(state, action);
};
const initStore = ()=>createStore(reducer, bindMiddleware([
        thunk
    ]))
;
module.exports = createWrapper(initStore);


/***/ }),

/***/ 648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 173:
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ 417:
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ }),

/***/ 87:
/***/ ((module) => {

module.exports = require("socket.io-client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(510));
module.exports = __webpack_exports__;

})();