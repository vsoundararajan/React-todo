/**
 * Created by soundararajanvenkatasubramanian on 11/26/16.
 */
var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');

export var Todo = React.createClass({
    render: function(){
        var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
        var backgroundColor = completed ? "#e6f2ff" : "#f7ffe6";
        var borderColor = completed ? "1px solid #3399ff" : "1px solid #aaff00";
        var renderDate = () => {
            var message = 'Created';
            var timestamp = createdAt;

            if(completed){
                message = 'Completed';
                timestamp = completedAt;
            }
            return message + " " + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        }
        return(
            <div onClick={ () => {
                //this.props.onToggle(id);
                dispatch(actions.toggleTodo(id));
            }} style={{alignItems: "center", backgroundColor: backgroundColor, border: borderColor, borderRadius: "5px", padding: "2px", margin: "5px", textAlign: "left"}} >

                <p><input type="checkbox" checked={completed} />
                    &nbsp;&nbsp;&nbsp;{text}</p>
                <p>{renderDate()}</p>
            </div>
        )
    }
});

export default connect()(Todo);


