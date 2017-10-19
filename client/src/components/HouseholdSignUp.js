import React from 'react';
import API from "../utils/API";
import signupcss from '../signup.css';

export default class HouseholdSignUp extends React.Component {

   state = {
            housename: "",
            housepassword: "",
            email:""
        };

    handleSignUpSubmit = event => {
        event.preventDefault();
            API.saveHousehold({
              housename: this.state.housename,
              housepassword: this.state.housepassword,
              email: this.state.email
            })
              .catch(err => console.log(err));
        
      };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };


    render() {
        return (
            <div className = "signUpForm">
                <form>
                    <p>
                        Create a Household Name
                    </p>
                    <input
                        value={this.state.housename}
                        onChange={this.handleInputChange}
                        name="housename"
                    ></input>
                    <p>
                        Household Password
                    </p>
                    <input
                    value={this.state.housepassword}
                    onChange={this.handleInputChange}
                    name="housepassword"
                    ></input>
                    <p>
                        Email
                    </p>
                    <input
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                    ></input>
                    <button
                        onClick={this.handleSignUpSubmit}
                    >
                        Sign Up
                    </button>

                </form>
            </div>
        )
    }
}; 