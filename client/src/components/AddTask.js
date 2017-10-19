import React from 'react';
import API from "../utils/API";
import addTask from '../addtask.css';
import postIt from '../images/postit.png';

export default class AddTask extends React.Component {

    state = {
        taskName: "",
        taskTime: "",
        taskLocation: ""
    };


    handleAddTaskSubmit = event => {
        event.preventDefault();
        API.saveTask({
            taskName: this.state.taskName,
            taskTime: this.state.taskTime,
            taskDate: Date.now,
            taskLocation: this.state.taskLocation
        })
            .catch(err => console.log(err));

        this.setState({
            taskName: "",
            taskTime: "",
            taskDate: "",
            taskLocation: ""
        });
    };

    handleGoHomeSubmit = event => {
        event.preventDefault();
        API.saveTask({
            taskName: this.state.taskName,
            taskTime: this.state.taskTime,
            taskDate: new Date(),
            taskLocation: this.state.taskLocation
        })
            .catch(err => console.log(err));
        this.props.history.push('/home')

    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    render() {

        return (
            <div className = "taskContainer">
                <div className ="backgroundImage">
                     <img className= "postIt" src={postIt} alt="image of top of post it and people working"/>
                 </div>

            <div className = "taskForm">
                <form className = "uk-form-large">
                    <p>Task</p>
                    <input className = "uk-input"
                        value={this.state.taskName}
                        onChange={this.handleInputChange}
                        name="taskName"
                    ></input>
                    <p>Date/Time (Optional)</p>
                    <input className = "uk-input"
                        value={this.state.taskTime}
                        onChange={this.handleInputChange}
                        name="taskTime"
                    ></input>
                    <p>Location</p>
                    <input className = "uk-input"
                        value={this.state.taskLocation}
                        onChange={this.handleInputChange}
                        name="taskLocation"
                    ></input>
                    <button className = "uk-button uk-button-default"
                        onClick={this.handleAddTaskSubmit}
                    >
                        Add Task
                    </button>
                    <button className = "uk-button uk-button-default"
                        onClick={this.handleGoHomeSubmit.bind(this)}
                    >
                        Add and Go Home
                    </button>
                </form>
            </div>
        </div>
        )
    }
};