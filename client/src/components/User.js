import React from 'react';
import API from '../utils/API';

//class User extends Component {
export default class User extends React.Component {
 
    constructor(props, context) {
        super(props, context);   this.state = {
        email: ""
    };
        };

    handleFormSubmit = event => {
        event.preventDefault();
        
            API.saveUser({
                email: this.state.email,
                householdID: "2",
                password: "1234"
            })
            .catch(err => console.log(err));
        
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render(){
        return (
           <div>
                    <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    </div>
            
                   

                        <form>
                            <input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                                placeholder="Email"
                            />
                            <button
                                //disabled={!(this.state.email)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit User
                            </button>
                        </form>
            </div>
        );
    }
}

// export default Users;