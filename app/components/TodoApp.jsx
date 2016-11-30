var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var styles = {
    testAlign: "center",
    margin: "2rem 0"
}
var TodoApp = React.createClass({

    getInitialState: function() {
      return{
          showCompleted: false,
          searchText: "",
          todos: TodoAPI.getTodos()
      };
    },
    componentDidUpdate: function(){
       TodoAPI.setTodos(this.state.todos);
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
                  completed: false,
                  createdAt: moment().unix(),
                  completedAt: undefined
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
   render: function(){
       console.log("after handleAddTodo render is called");
       var {todos, showCompleted, searchText} = this.state;
       var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
       return(
           <div>
               <h1 className="page-title" style={{textAlign: styles.testAlign, margin: styles.margin}}>To do app</h1>

               <div className="row">
                   <div className="column small-centered small-11 medium-6 large-5">
                       <div className="container" style={{background: "#fafafa", border: "1px solid #eeeeee", borderRadius: "15px", padding: "0", marginBottom: "2rem"}}>
                           <TodoSearch onSearch={this.handleSearch} />
                           <TodoList  />
                           <AddTodo onAddTodo={this.handleAddTodo}/>
                       </div>
                   </div>
               </div>
           </div>
       )
   }
});

module.exports = TodoApp;

