"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var constants_1 = require("./constants");
var Header = function (_a) {
    var handleNewTodoKeyDown = _a.handleNewTodoKeyDown;
    var todoRef = React.useRef(null);
    var handleKeyDown = function (event) {
        if (event.keyCode !== constants_1.ENTER_KEY) {
            return;
        }
        event.preventDefault();
        var val = todoRef.current.value.trim();
        if (val) {
            handleNewTodoKeyDown(val);
            todoRef.current.value = '';
        }
    };
    return (React.createElement("header", { className: "header" },
        React.createElement("h1", null, "todos"),
        React.createElement("input", { ref: todoRef, className: "new-todo", placeholder: "What needs to be done?", onKeyDown: handleKeyDown, autoFocus: true })));
};
exports.default = Header;
