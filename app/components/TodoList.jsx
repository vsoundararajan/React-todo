/**
 * Created by soundararajanvenkatasubramanian on 11/26/16.
 */
var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';

export var TodoList = React.createClass({
    render: function(){
        var {todos} =  this.props;
        if(todos.length === 0){
            return(
                <p>
                  Nothing to show
                </p>
            );
        }
        var renderTodos=  () => {
            return todos.map( (todo) => {
                console.log(todo);
                return (<Todo key={todo.id} {...todo}  />);
            });
        }
        return(
            <div>
                {renderTodos()}
            </div>
        )
    }
});

export default connect(
    (state) => {
        return {
          todos: state.todos
        };
    }
)(TodoList);

