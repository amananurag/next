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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cards_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards.module.scss */ \"./components/cards/cards.module.scss\");\n/* harmony import */ var _cards_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cards_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Card(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: props.profiles.map((profile)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_cards_module_scss__WEBPACK_IMPORTED_MODULE_2___default().profileCardContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: \"/favicon.png\",\n                            alt: \"profile\",\n                            width: 100,\n                            height: 100\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\001ZSS744\\\\Documents\\\\angular\\\\hello-next\\\\components\\\\cards\\\\card.js\",\n                            lineNumber: 10,\n                            columnNumber: 19\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: profile.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\001ZSS744\\\\Documents\\\\angular\\\\hello-next\\\\components\\\\cards\\\\card.js\",\n                            lineNumber: 13,\n                            columnNumber: 19\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: profile.description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\001ZSS744\\\\Documents\\\\angular\\\\hello-next\\\\components\\\\cards\\\\card.js\",\n                            lineNumber: 14,\n                            columnNumber: 19\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\001ZSS744\\\\Documents\\\\angular\\\\hello-next\\\\components\\\\cards\\\\card.js\",\n                    lineNumber: 8,\n                    columnNumber: 12\n                }, this)\n            }, profile.id, false, {\n                fileName: \"C:\\\\Users\\\\001ZSS744\\\\Documents\\\\angular\\\\hello-next\\\\components\\\\cards\\\\card.js\",\n                lineNumber: 7,\n                columnNumber: 10\n            }, this))\n    }, void 0, false);\n}\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL2NhcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDVDtBQUM5QixTQUFTRSxLQUFLQyxLQUFLO0lBQ2YscUJBQ0k7a0JBQ0FBLE1BQU1DLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLHdCQUNuQiw4REFBQ0M7Z0JBQU1DLFdBQVdSLGdGQUEwQjswQkFDMUMsNEVBQUNPOztzQ0FFTSw4REFBQ04sbURBQUtBOzRCQUFDUyxLQUFJOzRCQUFlQyxLQUFJOzRCQUFVQyxPQUFPOzRCQUFLQyxRQUFROzs7Ozs7c0NBRzVELDhEQUFDTjtzQ0FBS0QsUUFBUVEsSUFBSTs7Ozs7O3NDQUNsQiw4REFBQ1A7c0NBQUtELFFBQVFTLFdBQVc7Ozs7Ozs7Ozs7OztlQVBpQlQsUUFBUVUsRUFBRTs7Ozs7O0FBY3RFO0tBbEJTZDtBQW1CVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcmRzL2NhcmQuanM/ZGY4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGUgZnJvbSAnLi9jYXJkcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmZ1bmN0aW9uIENhcmQocHJvcHMpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAge3Byb3BzLnByb2ZpbGVzLm1hcCgocHJvZmlsZSkgPT4gKFxyXG4gICAgICAgICA8ZGl2ICAgY2xhc3NOYW1lPXtzdHlsZS5wcm9maWxlQ2FyZENvbnRhaW5lcn0ga2V5PXtwcm9maWxlLmlkfT4gXHJcbiAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Zhdmljb24ucG5nXCIgYWx0PVwicHJvZmlsZVwiIHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfSAvPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+e3Byb2ZpbGUubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj57cHJvZmlsZS5kZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiXSwibmFtZXMiOlsic3R5bGUiLCJJbWFnZSIsIkNhcmQiLCJwcm9wcyIsInByb2ZpbGVzIiwibWFwIiwicHJvZmlsZSIsImRpdiIsImNsYXNzTmFtZSIsInByb2ZpbGVDYXJkQ29udGFpbmVyIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cards/card.js\n"));

/***/ })

});