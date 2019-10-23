import React, { Component } from "react";
import axios from "axios";
import config from "../../config/index";
import { Link } from "react-router-dom";
import {
    Form,
    FormInput,
    FormLabel,
    FormSubmitButton,
    FormHeader,
} from "../Custom/Forms";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            loading: false
        };
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const credentials = {
            username: this.state.username,
            password: this.state.password
        };

    this.setState({
        loading: true
    });

    axios
        .post(`#`, credentials)
        .then(res => {
            localStorage.setItem("authToken", res.data.key);
            this.setState({
                username: "",
                password: "",
                loading: false
            });
            this.props.history.push(`/`);
        });
    };

    render() {
        return(
            <Body>
                <Form onSubmit={this.handleSubmit}>
                    <FormHeader>MUD Login</FormHeader>

                    <FormLabel name="Username">
                        <FormInput
                            onChange={this.handleInput}
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={this.state.username}
                            />
                    </FormLabel>

                    <FormLabel name="password">
                        <FormInput 
                        onChange={this.handleInput}
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        />
                    </FormLabel>

                    <FormSubmitButton type="submit" disabled={!this.state.password}>
                        Login
                    </FormSubmitButton>

                    <Link to="/register">
                        Not registered yet?
                    </Link>

                </Form>
            </Body>
        );
    }
}

export default Login;