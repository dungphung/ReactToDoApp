var React = require('react');


var Todo = React.createClass({

    render: function() {
        var {text, id} = this.props;
        return (
            <div>
                <h4>{id} {text}</h4>
            </div>
        )
    }
});


module.exports = Todo;