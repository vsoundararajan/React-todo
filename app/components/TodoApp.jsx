var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({

    getInitialState: function() {
      return{
          showCompleted: false,
          searchText: "",
          todos: [
              {
                  id: 1,
                  text: 'Walk the dog'
              },
              {
                  id: 2,
                  text: 'Clean the yard'
              },
              {
                  id: 3,
                  text: 'Clean the yard--'
              },
              {
                  id: 4,
                  text: 'Clean the yard------'
              },
          ]
      };
    },
    handleAddTodo: function(text){
      alert(text);
      // var newtodos = {todos: [...this.state.todos, {id: 5, text: text}]};
      // this.setState({todos: newtodos});
      //   console.log(newtodos);
    },
    handleSearch: function(showCompleted, searchText){
       this.setState({
           showCompleted: showCompleted,
           searchText: searchText.toLowerCase()
       });
    },
   render: function(){
       console.log("after handleAddTodo render is called");
       var {todos} = this.state;
       return(
           <div>
             <TodoSearch onSearch={this.handleSearch} />
             <TodoList todos={todos} />
             <AddTodo onAddTodo={this.handleAddTodo}/>
           </div>
       )
   }
});

module.exports = TodoApp;

