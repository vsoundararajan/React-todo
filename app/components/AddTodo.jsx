/**
 * Created by soundararajanvenkatasubramanian on 11/26/16.
 */
var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
    getInitialState: function(){
        return(
         {}
        )
    },
    handleSubmit: function(e){
      //alert(this.refs.todotext.value)  ;
      e.preventDefault();
      var {dispatch} = this.props;
      var todoText = this.refs.todoText.value;
      if(todoText.length >= 5){
          this.refs.todoText.value = "";
          //this.props.onAddTodo(todoText);
          dispatch(actions.addTodo(todoText));
      }else{
          alert("todo item must be atleast 10 characters long.");
          this.refs.todoText.focus();
      }
    },
    render: function(){
        return(
            <div className="container__footer" style={{borderTop: "1px solid #eeeeee", padding: "1rem 1rem 0 1rem"}}>
                <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter new todo item" ref="todoText"/>
                <button className="button expanded">Add Todo</button>
                </form>
            </div>
        )
    }
});

export default connect()(AddTodo);

