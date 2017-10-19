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
                // for (var i = 0; i < userArray.length; i++) {
                // console.log(res.data[i].email)
                // console.log(userArray[0].email)
                // userArray.filter(function (userObject) {

                //     return _this.state.email === userObject.email;
                // }).filter(function (userObject) {
                //     return _this.state.password === userObject.password
                // });

                //     }
                // }
                
                function findEmail(fruit) { 
                    return userArray.email === _this.state.email;
                }
                
                console.log(userArray.find(findEmail));

            })
            .catch(err => console.log(err))
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
       
        <div className ="signInContainer">
             <div className ="backgroundImage">
                 <img className= "desk" src={desk} alt="image of desk"/>
            </div>
        <div className = "mainForm">
            <div className = "signinForm">

                <form className = "uk-form-large">
                    
                    <input className = "uk-input"
                        placeholder = "Email"
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