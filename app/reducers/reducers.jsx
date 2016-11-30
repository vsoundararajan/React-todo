var moment = require('moment');
var uuid = require('node-uuid');
var _ = require('lodash');

export var searchTextReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT':
            return action.searchText;
        default:
            return state;
    }
}
// showCompletedReducer, default false, TOGGLE_SHOW_COMPLETED
export var showCompletedReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_SHOW_COMPLETED':
            return !state;
        default:
            return state;
    }
};

export var todosReducer =  (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: uuid(),
                    text: action.text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ];
        case 'TOGGLE_TODO':
            var updatedTodos = _.cloneDeep(state);
            var returnTodos = updatedTodos.map( (item) => {
                if(item.id === action.id){
                    item.completed = !item.completed;
                    item.completedAt = item.completed ? moment().unix() : undefined;
                }
                return item;
            });
            return returnTodos;
        case 'ADD_TODOS':
            return [
                ...state,
                ...action.todos
            ];
        default:
            return state;
    }
};

