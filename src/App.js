import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/header'
import { render } from 'react-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import about from './components/pages/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component{

  state = {
    todos: [
      {
        id:1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id:2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id:3,
        title: 'Buy Chocolate',
        completed: false
      }
    ]  
  }

  markComplete = (id) => {

    this.setState({todos: this.state.todos.map(todo => {

      if(todo.id === id){

        todo.completed = !todo.completed

      }

      return todo;

    })});

  }

  //deleteTodo

  delTodo = (id) =>{
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !==id)]})
  }

  addTodo = (title) => {
    const newTodo = {
  
      id: this.state.todos.length,
      title,
      completed: false
    }
    this.setState( { todos: [...this.state.todos, newTodo]})
  }


  render(){
  return (
    <Router>
      <div className="App">
      <Header />
      <Route exact path="/" render= {props => (
        <React.Fragment>
          <AddTodo addTodo = {this.addTodo} /> 
          <Todos todos= {this.state.todos} markComplete = {this.markComplete} 
          delTodo = {this.delTodo}/>
        </React.Fragment>
      )}/>

      <Route path="/about" component = {about}/>
      
      </div>
    </Router>
  );
  }
}

export default App;
