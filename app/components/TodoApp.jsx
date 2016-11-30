var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var styles = {
    testAlign: "center",
    margin: "2rem 0"
}
var TodoApp = React.createClass({

   render: function(){
       return(
           <div>
               <h1 className="page-title" style={{textAlign: styles.testAlign, margin: styles.margin}}>To do app</h1>

               <div className="row">
                   <div className="column small-centered small-11 medium-6 large-5">
                       <div className="container" style={{background: "#fafafa", border: "1px solid #eeeeee", borderRadius: "15px", padding: "0", marginBottom: "2rem"}}>
                           <TodoSearch />
                           <TodoList  />
                           <AddTodo />
                       </div>
                   </div>
               </div>
           </div>
       )
   }
});

module.exports = TodoApp;

