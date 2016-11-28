var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hasgHistory} = require('react-router');
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

var TodoApp = require('TodoApp');

ReactDOM.render(
    <TodoApp />,
    document.getElementById("app")
);
