import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './unnamed.jpg';

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

class App extends Component {
  render() {
    return (
        <Router>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
                        <img src={logo} width="30" height="30" alt="codingthesmartway.com"/>
                    </a>
                    <Link to="/" className="navbar-brand">Mern Stack Todo-App</Link>
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Todo</Link>
                        </li>
                    </ul>                   
                </nav>
                <Route path="/" exact component={TodosList} />
                <Route path="/edit/:id" exact component={EditTodo} />
                <Route path="/create" exact component={CreateTodo} />
            </div>
            
        </Router>    
    );
  }
}

export default App;
