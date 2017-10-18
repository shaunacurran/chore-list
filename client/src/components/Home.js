import React from 'react';
import API from "../utils/API";

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


    render() {
        var taskEntries = this.state.allTasks;
        var listTasks = taskEntries.map(task => (
            <li>
                {task.taskName}
                <br />
                {task.taskTime}
                <br />
                {task.taskLocation}
                <br />
            </li>

        ));
        return (
            <div>
                <h4>
                    Events
                <ul>
                        {listTasks}
                    </ul>
                </h4>
            </div>
        );
    }
};