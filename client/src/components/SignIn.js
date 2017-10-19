import React from 'react'
import API from "../utils/API";

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
            <div>
                <form>
                    <p>Email</p>
                    <input
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                    ></input>
                    <p>Password</p>
                    <input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                    ></input>
                    <button
                        onClick={this.handleSignInSubmit}
                    >
                        Sign In
                    </button>

                </form>
            </div>
        )
    }
};