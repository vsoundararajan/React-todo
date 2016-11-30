var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var {Route, Router, IndexRoute, hasgHistory} = require('react-router');



require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

var TodoApp = require('TodoApp');
var actions = require('./actions/actions');
var store = require('configureStore').configure();

store.subscribe( () => {
   console.log('New state', store.getState());
});

store.dispatch(actions.addTodo("Learn redux with react"));
store.dispatch(actions.setSearchText("redux"));
store.dispatch(actions.toggleShowCompleted());

ReactDOM.render(
    <Provider store={store}>
       <TodoApp/>
    </Provider>,
    document.getElementById("app")
);
