import React from 'react';
import axios from 'axios';

export default class ViewStudents extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            students:[]
        };
    }
    render() {
        const studentsMap = this.state.students.map((students) => <div>{students.name}</div>)
        return (
        <div>
            <h3>View Students</h3>
            {studentsMap}
        </div>
        );
    }
    componentWillMount() {
        console.log('you did it');
        axios('/api/students/all').then(response => {
            this.setState({
                students: response.data
            });
        });
    }
}

// need to get list of students from the server 
// need api route for the list of students