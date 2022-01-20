"use strict";
exports.id = 501;
exports.ids = [501];
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
const restoreMessages = (payload)=>({
        type: types.RESTORE_MESSAGES,
        payload
    })
;
module.exports = {
    types,
    newMessage,
    changeNickname,
    restoreMessages
};


/***/ }),

/***/ 975:
/***/ ((module) => {


module.exports = {
    NEW_MESSAGE: 'NEW_MESSAGE',
    CHANGE_NICKNAME: 'CHANGE_NICKNAME',
    RESTORE_MESSAGES: 'RESTORE_MESSAGES'
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
        case types.RESTORE_MESSAGES:
            return [
                ...state,
                ...action.payload, 
            ];
        default:
            return state;
    }
};


/***/ }),

/***/ 164:
/***/ ((module) => {


const INITIAL_STATE = {};
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
const socketIo = __webpack_require__(87);
const BASE_URL = 'http://localhost:3000';
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
            ...action.payload,
            socket: socketIo.connect(BASE_URL)
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


/***/ })

};
;