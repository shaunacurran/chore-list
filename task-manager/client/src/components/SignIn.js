import React from 'react'

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
                    <input
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder="Email"
                    ></input>
                    <input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="Password"
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