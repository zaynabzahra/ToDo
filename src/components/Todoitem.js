import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

export class Todoitem extends Component {

    getStyle = () => {
        
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        } 

    }

    render() {

        const{id, title} = this.props.todo;
        return (
            <div style= {this.getStyle()}>
                <p>
                    <input type="checkbox" onChange = {this.props.markComplete.bind(this,id)} /> {' '}
                    {title}
                    <Button onClick={this.props.delTodo.bind(this,id)} variant="outline-danger" style={btnStyle}>x</Button>{' '}
                </p>
            </div>
        )
    }
}

//proptype
Todoitem.propTypes =  {
    todo: PropTypes.object.isRequired
}

const btnStyle = {

    border: 'none',
    padding: '5px 10px',
    boarderRadius: '50%',
    cursor: 'pointer',
    float: 'right'

}

export default Todoitem
