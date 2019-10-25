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
    
    state = {
        username: "",
        password1: "",
        loading: false
    };


    handleInput = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const credentials = {
            "username": `${this.state.username}`,
            "password": `${this.state.password}`
        };

        console.log(credentials)
        this.setState({
            loading: true
        });

        const baseURL = 'https://team22adv.herokuapp.com/api'
        // const baseURL = 'http://lambda-mud-test.herokuapp.com/api'
        
            axios
                .post(`${baseURL}/login/`, credentials)
                .then(res => {
                    console.log(res)
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
            
        );
    }
}

export default Login;