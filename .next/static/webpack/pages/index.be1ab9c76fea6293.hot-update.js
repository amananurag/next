"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/cards/card.js":
/*!**********************************!*\
  !*** ./components/cards/card.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cards_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards.module.scss */ \"./components/cards/cards.module.scss\");\n/* harmony import */ var _cards_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cards_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Card(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: props.profiles.map((profile)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_cards_module_scss__WEBPACK_IMPORTED_MODULE_2___default().profileCard),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: (_cards_module_scss__WEBPACK_IMPORTED_MODULE_2___default().profileImage),\n                        src: \"/neeraj.png\",\n                        alt: \"profile\",\n                        width: 10,\n                        height: 10\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\001ZSS744\\\\Documents\\\\angular\\\\hello-next\\\\components\\\\cards\\\\card.js\",\n                        lineNumber: 10,\n                        columnNumber: 19\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_cards_module_scss__WEBPACK_IMPORTED_MODULE_2___default().profileName),\n                        children: profile.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\001ZSS744\\\\Documents\\\\angular\\\\hello-next\\\\components\\\\cards\\\\card.js\",\n                        lineNumber: 11,\n                        columnNumber: 19\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_cards_module_scss__WEBPACK_IMPORTED_MODULE_2___default().profileDescription),\n                        children: profile.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\001ZSS744\\\\Documents\\\\angular\\\\hello-next\\\\components\\\\cards\\\\card.js\",\n                        lineNumber: 12,\n                        columnNumber: 19\n                    }, this)\n                ]\n            }, profile.id, true, {\n                fileName: \"C:\\\\Users\\\\001ZSS744\\\\Documents\\\\angular\\\\hello-next\\\\components\\\\cards\\\\card.js\",\n                lineNumber: 8,\n                columnNumber: 12\n            }, this))\n    }, void 0, false);\n}\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL2NhcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDVDtBQUM5QixTQUFTRSxLQUFLQyxLQUFLO0lBQ2YscUJBQ0k7a0JBQ0FBLE1BQU1DLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLHdCQUVqQiw4REFBQ0M7Z0JBQXFCQyxXQUFXUix1RUFBaUI7O2tDQUUzQyw4REFBQ0MsbURBQUtBO3dCQUFDTyxXQUFXUix3RUFBa0I7d0JBQUVXLEtBQUk7d0JBQWNDLEtBQUk7d0JBQVVDLE9BQU87d0JBQUlDLFFBQVE7Ozs7OztrQ0FDekYsOERBQUNQO3dCQUFJQyxXQUFXUix1RUFBaUI7a0NBQUdNLFFBQVFVLElBQUk7Ozs7OztrQ0FDaEQsOERBQUNUO3dCQUFJQyxXQUFXUiw4RUFBd0I7a0NBQUdNLFFBQVFZLFdBQVc7Ozs7Ozs7ZUFKM0RaLFFBQVFhLEVBQUU7Ozs7OztBQVUvQjtLQWZTakI7QUFnQlQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkcy9jYXJkLmpzP2RmOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlIGZyb20gJy4vY2FyZHMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5mdW5jdGlvbiBDYXJkKHByb3BzKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgIHtwcm9wcy5wcm9maWxlcy5tYXAoKHByb2ZpbGUpID0+IChcclxuICAgICAgIFxyXG4gICAgICAgICAgIDxkaXYga2V5PXtwcm9maWxlLmlkfSBjbGFzc05hbWU9e3N0eWxlLnByb2ZpbGVDYXJkfT5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlLnByb2ZpbGVJbWFnZX0gc3JjPVwiL25lZXJhai5wbmdcIiBhbHQ9XCJwcm9maWxlXCIgd2lkdGg9ezEwfSBoZWlnaHQ9ezEwfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvZmlsZU5hbWV9Pntwcm9maWxlLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9maWxlRGVzY3JpcHRpb259Pntwcm9maWxlLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7Il0sIm5hbWVzIjpbInN0eWxlIiwiSW1hZ2UiLCJDYXJkIiwicHJvcHMiLCJwcm9maWxlcyIsIm1hcCIsInByb2ZpbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJwcm9maWxlQ2FyZCIsInByb2ZpbGVJbWFnZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicHJvZmlsZU5hbWUiLCJuYW1lIiwicHJvZmlsZURlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cards/card.js\n"));

/***/ })

});