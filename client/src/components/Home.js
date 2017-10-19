import React from 'react';
import API from "../utils/API";
import taskscss from '../tasks.css';
import postIt from '../images/postit.png';
import map from './Map.js';

export default class Home extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            allTasks: [],
            taskName: "",
            taskTime: "",
            taskLocation: ""
        };
        this.loadTasks.bind(this);
        this.deleteTask.bind(this)
    };

    componentDidMount() {
        this.loadTasks();
    }

    loadTasks = event => {
        var _this = this;
        API.getTasks()
            .then(function (res) {
                _this.setState({
                    allTasks: res.data
                })
                console.log(res.data)
            })
            .catch(err => console.log(err));
    };

    deleteTask = id => {
        var tthis = this;
        API.deleteTask(id)
            .then(res => tthis.loadTasks())
            .catch(err => console.log(err))
    }


    render() {
        var taskEntries = this.state.allTasks;
        var listTasks = taskEntries.map(task => (

            <li className = "uk-list uk-list-striped">
                {task.taskName}
                <br />
                {task.taskTime}
                <br />
                {task.taskLocation}
                <br />
                <button className = "uk-button uk-button-default"
                    onClick={() => this.deleteTask(task._id)}
                >
                    Done
                </button>
            </li>
        )
        );
        return (
        <div className = "tasksContainerHome">
            <div className ="backgroundImageHome">
                    <img className= "postIt" src={postIt} alt="image of top of post it and people working"/>
            </div>
            <div className = "uk-form-large">
                <div className="tasks">
                    <div>
                      <h4>
                            Tasks
                        <ul>
                            {listTasks}
                        </ul>
                      </h4>
                    </div>
                </div>
            </div>


    </div> 




    
        );
    }
}