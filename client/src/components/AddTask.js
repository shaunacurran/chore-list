import React from 'react'

export default class AddTask extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            task: "",
            date: "",
            location: ""
        };
    };

    handleAddTaskSubmit = event => {
        event.preventDefault();
      };

    handleGoHomeSubmit = event => {
        event.preventDefault();
      };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };


    render() {
        return (
            <div>
                <form>
                    <p>Task</p>
                    <input
                        value={this.state.task}
                        onChange={this.handleInputChange}
                        name="task"
                    ></input>
                    <p>Date/Time (Optional)</p>
                    <input
                        value={this.state.date}
                        onChange={this.handleInputChange}
                        name="date"
                    ></input>
                    <p>Location</p>
                    <input
                        value={this.state.location}
                        onChange={this.handleInputChange}
                        name="location"
                    ></input>
                    <button
                        onClick={this.handleAddTaskSubmit}
                    >
                        Add Task
                    </button>
                    <button
                        onClick={this.handleGoHomeSubmit}
                    >
                        Submit and Go Home
                    </button>

                </form>
            </div>
        )
    }
};