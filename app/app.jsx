var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var {Route, Router, IndexRoute, hasgHistory} = require('react-router');



require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

var TodoApp = require('TodoApp');
var actions = require('./actions/actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

store.subscribe( () => {
   var state = store.getState();
   console.log('New state', store.getState());
   TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// store.dispatch(actions.addTodo("Learn redux with react"));
// store.dispatch(actions.setSearchText("redux"));
// store.dispatch(actions.toggleShowCompleted());

ReactDOM.render(
    <Provider store={store}>
       <TodoApp/>
    </Provider>,
    document.getElementById("app")
);
