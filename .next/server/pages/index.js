"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(131);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redux_actions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(555);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(501);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_redux_store__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_4__]);
uuid__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const getServerSideProps = _redux_store__WEBPACK_IMPORTED_MODULE_5___default().getServerSideProps((store)=>({ req  })=>{
        if (req.messages) {
            const formattedMessages = req.messages.map(({ message , nickname , timestamp  })=>`${timestamp} ${nickname} ${message}`
            );
            store.dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.restoreMessages)(formattedMessages));
        }
    }
);
function Chat() {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const { 0: inputMessage , 1: setInputMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: inputNickname , 1: setInputNickname  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const socket = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.socket
    );
    const messages = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.messages
    );
    const { nickname: nickname1  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.user
    );
    const { connected  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(({ users  })=>users
    );
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (socket.on) {
            socket.emit('getConnectedUsers');
        }
    }, [
        socket
    ]);
    const handleMessage = ({ target  })=>setInputMessage(target.value)
    ;
    const handleNickname = ({ target  })=>setInputNickname(target.value)
    ;
    const handleSubmitMessage = (e)=>{
        e.preventDefault();
        socket.emit('message', {
            chatMessage: inputMessage,
            nickname: nickname1
        });
        setInputMessage('');
    };
    const handleSubmitNickname = (e)=>{
        e.preventDefault();
        socket.emit('setNickname', inputNickname);
        dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.changeNickname)(inputNickname));
        setInputNickname('');
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Chat"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Usu\xe1rios conectados"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        "data-testid": "online-user",
                        children: nickname1
                    }),
                    Object.values(connected).filter(({ id  })=>socket.id !== id
                    ).map(({ id , nickname  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            "data-testid": "online-user",
                            children: nickname.substring(0, 16)
                        }, id)
                    )
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Mensagens"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: messages.map((message)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        "data-testid": "message",
                        children: message
                    }, (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)())
                )
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmitNickname,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        "data-testid": "nickname-box",
                        onChange: handleNickname,
                        type: "text",
                        value: inputNickname
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        "data-testid": "nickname-button",
                        type: "submit",
                        children: "Salvar"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmitMessage,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        "data-testid": "message-box",
                        type: "text",
                        onChange: handleMessage,
                        value: inputMessage
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        "data-testid": "send-button",
                        type: "submit",
                        children: "Enviar"
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);

});

/***/ }),

/***/ 648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 22:
/***/ ((module) => {

module.exports = require("react-redux");

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

/***/ 555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [501], () => (__webpack_exec__(678)));
module.exports = __webpack_exports__;

})();