import React from 'react'
import API from "../utils/API";
import signincss from '../signin.css';
import desk from '../images/desk.png'
import navbar from '../navbar.css';
import styles from '../uikit.css';

import NavImage from '../components/NavImage';

export default class SignIn extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            email: "",
            password: "",
        };
    };

    handleSignInSubmit = event => {
        event.preventDefault();
        var _this = this;
        API.getUsers({})
            .then(function (res) {
                var userArray = res.data

                function findEmail(userArray) {
                    return (userArray.email === _this.state.email,
                        userArray.password === _this.state.password
                    );
                }
                sessionStorage.setItem('Email', _this.state.email);
                sessionStorage.setItem('Password', _this.state.password);
                sessionStorage.setItem('Household', );

                if (userArray.find(findEmail)) {
                    _this.props.history.push('/home')
                }



            })
            .catch(err => console.log(err))

    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    render() {
        return (

       
        <div className ="uk-container">
             <div className ="backgroundImage">
                 <img className= "desk" src={desk} alt="image of desk"/>
            </div>
        <div className = "mainForm">
            <div className = "signinForm">

                <form className = "uk-form-large">
                    
                    <input className = "uk-input"
                        placeholder = "Email"

            <div className="signinForm">
                <form>
                    <p>Email</p>
                    <input

                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                    ></input>
                    <br></br>
                    <input className = "uk-input"
                        placeholder = "Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                    ></input>
                    <br></br>
                    <button className = "uk-button uk-button-default"
                        onClick={this.handleSignInSubmit}
                    >
                        Sign In
                    </button>

                </form>
                </div>
            </div>
        </div>
        
        )
    }
};