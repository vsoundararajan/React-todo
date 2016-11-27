var React = require('react');
var TodoList = require('./TodoList');
var AddTodo = require('./AddTodo');

var TodoApp = React.createClass({

    getInitialState: function() {
      return{
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
   render: function(){
       console.log("after handleAddTodo render is called");
       var {todos} = this.state;
       return(
           <div>
             <TodoList todos={todos} />
             <AddTodo onAddTodo={this.handleAddTodo}/>
           </div>
       )
   }
});

module.exports = TodoApp;

