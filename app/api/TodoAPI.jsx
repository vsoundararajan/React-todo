var $ = require('jquery');


module.exports = {
    setTodos: function (todos){
      if($.isArray(todos)){
          localStorage.setItem('todos', JSON.stringify(todos));
          return todos;
      }
    },
    getTodos: function(){
        var stringTodos = localStorage.getItem('todos');
        var todos = [];
        try{
            todos = JSON.parse(stringTodos);
        }catch (e){

        }

        return $.isArray(todos) ? todos : [];
    },
    filterTodos: function(todos, showCompleted, searchText){
        var filteredTodos = todos;
        // filter by show completed
        filteredTodos = filteredTodos.filter( (todo) => {
           return !todo.completed || showCompleted;
        });
        // filter by search text
        filteredTodos = filteredTodos.filter( (todo) => {
            var text = todo.text.toLowerCase();
            if(searchText.trim().length <= 0){
                return todo
            }else if(text.indexOf(searchText) > -1){
                return todo;
            }
        });
        // Sort todos with non completed first
        filteredTodos.sort( (a, b) => {
           //return -1;  // a is first b is second
           //return 1 b is first and a is second
           // return 0 if no chanhe needed
           if(!a.completed && b.completed){
              return -1;  // a is not completed hence it should be moved up
           }else if(a.completed && !b.completed){
               return 1;  // b is not completed hence it should be moved up
           }else{
               return 0;
           }
        });
        return filteredTodos;
    }
};