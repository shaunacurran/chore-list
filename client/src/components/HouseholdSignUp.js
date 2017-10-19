import React from 'react';
import NavImage from '../components/NavImage';
import API from "../utils/API";
import desk from '../images/desk.png'
import signupcss from '../signup.css';
import navbar from '../navbar.css';
import styles from '../uikit.css';



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
        <div className ="formWrapper">
                <div className ="backgroundImageAccount">
                     <img className= "desk" src={desk} alt="image of top of desk"/>
                </div>
<div className = "uk-grid">
    <div className = "uk-column-1-2">
       
            <div className = "signUpForm">
                <form className = "uk-form-large">    
                    <input className = "uk-input"
                        placeholder = "Username"
                        value={this.state.housename}
                        onChange={this.handleInputChange}
                        name="housename"
                    ></input>
                    <br></br>
                    <input className = "uk-input"
                        placeholder = "Email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                    ></input>
                    <br></br>
                    <input className = "uk-input"
                    placeholder = "Password"
                    value={this.state.housepassword}
                    onChange={this.handleInputChange}
                    name="housepassword"
                    ></input>
                    <br></br>
                    <button className = "uk-button uk-button-default"
                        onClick={this.handleSignUpSubmit}
                    >
                        Sign Up
                    </button>
                </form>
           </div>
        </div>
    </div>
</div>
        )
    }
}; 