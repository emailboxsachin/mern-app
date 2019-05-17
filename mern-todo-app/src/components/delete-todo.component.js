import React, {Component} from 'react';
import axios from 'axios';

export default class DeleteTodo extends Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.state={
            todo_description:'',
            todo_responsible:'',
            todo_priority:'',
            todo_completed:false
        }
    }
    componentDidMount(){
        axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
        .then(response=>{
            this.setState({
                todo_description: response.data.todo_description,
                todo_responsible: response.data.todo_responsible,
                todo_priority: response.data.todo_priority,
                todo_completed: response.data.todo_completed                
            })
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }
    onSubmit(e){
        axios.get('http://localhost:4000/todos/delete/'+this.props.match.params.id)
        .then(response=>{
            alert(response.data.message);
        })
        .catch(function(error){
            console.log(error);
        }) 
        this.props.history.push('/');
        this.setState({
            todo_description:'',
            todo_responsible:'',
            todo_priority:'',
            todo_completed:false    
        })
    }
    onCancel(e){
        this.props.history.push('/');
    }
    render(){
        return(
            <div>
                <h3 style={{margin:20}}>Delete Todo</h3>
                <h5>
                    <label>Description : </label>               {this.state.todo_description}
                </h5>
                <h5>    
                    <label>Responsible : </label>{this.state.todo_responsible}
                </h5>
                <h5>
                    <label>Priority : </label>{this.state.todo_priority}
                </h5>
                <h5>
                    <label>Completed : </label>{this.state.todo_completed ? 'yes':'no'}
                </h5>
                <div className="form-group">
                    <input type="button"
                        className="btn btn-primary"
                        value="Delete Todo"
                        onClick={this.onSubmit}
                        /> 
                </div>
                 <div className="form-group">
                    <input type="button"
                        className="btn btn-primary"
                        value="Cancel"
                        onClick={this.onCancel}
                        />
                </div>
            </div>
        )
    }
}