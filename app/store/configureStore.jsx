var redux = require('redux');
var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = () => {
   var reducer = redux.combineReducers({
       showCompleted: showCompletedReducer,
       searchText: searchTextReducer,
       todos: todosReducer
   });

   var store = redux.createStore(reducer, redux.compose(
       window.devToolsExtension ? window.devToolsExtension() : f => f
   ));

    return store;
};

