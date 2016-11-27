var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({

    getInitialState: function() {
      return{
          showCompleted: false,
          searchText: "",
          todos: [
              {
                  id: uuid(),
                  text: 'Walk the dog',
                  completed: false
              },
              {
                  id: uuid(),
                  text: 'Clean the yard',
                  completed: true
              },
              {
                  id: uuid(),
                  text: 'Clean the yard--',
                  completed: true
              },
              {
                  id: uuid(),
                  text: 'Clean the yard------',
                  completed: false
              },
          ]
      };
    },
    handleAddTodo: function(text){
      //alert(text);
      // var newtodos = {todos: [...this.state.todos, {id: 5, text: text}]};
      this.setState({
          todos: [
              ...this.state.todos,
              {
                  id: uuid(),
                  text: text,
                  completed: false
              }
              ]
      });
      //   console.log(newtodos);
    },
    handleSearch: function(showCompleted, searchText){
       this.setState({
           showCompleted: showCompleted,
           searchText: searchText.toLowerCase()
       });
    },
    handleToggle: function(id){
      var updatedTodos = this.state.todos.map( (item) => {
        if(item.id === id){
            item.completed = !item.completed;
        }
        return item;
      });
      this.setState({todos: updatedTodos}) ;
    },
   render: function(){
       console.log("after handleAddTodo render is called");
       var {todos} = this.state;
       return(
           <div>
             <TodoSearch onSearch={this.handleSearch} />
             <TodoList todos={todos} onToggle={this.handleToggle}/>
             <AddTodo onAddTodo={this.handleAddTodo}/>
           </div>
       )
   }
});

module.exports = TodoApp;

