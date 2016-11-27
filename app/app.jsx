var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hasgHistory} = require('react-router');

var TodoApp = require('TodoApp');

ReactDOM.render(
    <TodoApp />,
    document.getElementById("app")
);
