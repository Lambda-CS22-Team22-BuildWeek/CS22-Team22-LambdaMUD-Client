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

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password1: "",
            password2: "",
            loading: false
        };
    }

    handleInput = e => {
        console.log(e.target)
        console.log(e.target.name)
        console.log(e.target.value)
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('onSub')

        const credentials = {
            "username": `${this.state.username}`,
            "password1": `${this.state.password}`,
            "password2": `${this.state.password}`
        };

        this.setState({
            loading: true
        });

        const baseURL = 'https://team22adv.herokuapp.com/api/login/'

        axios
            .post(`${baseURL}/registration/`, credentials)
            .then(res => {
                localStorage.setItem("authToken", res.data.key);
                this.setState({
                    username: "",
                    password: "",
                    loading: false
                });
                this.props.history.push((`/`));
            })
            .catch(err => {
                console.log(err);
            });

        this.setState({
            ...this.state,
            username: "",
            password: "",
            loading: false
        })
    };
    render() {
        return (
            
                <Form onSubmit={this.handleSubmit}>
                   
                    <FormHeader>MUD Register</FormHeader>

                    <FormLabel name="username">
                        <FormInput
                            onChange={this.handleInput}
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={this.state.username}
                        />
                    </FormLabel>

                    <FormLabel name="password1">
                        <FormInput
                            onChange={this.handleInput}
                            type="password"
                            name="password1"
                            placeholder="Password"
                            value={this.state.password1}
                        />
                    </FormLabel>

                    <FormLabel name="password2">
                        <FormInput
                            onChange={this.handleInput}
                            type="password"
                            name="password2"
                            placeholder="Confirm Password"
                            value={this.state.password2}
                        />
                    </FormLabel>

                    <FormSubmitButton type="submit" disabled={!this.state.password}>
                        Register
                    </FormSubmitButton>

                    <Link to="/login">
                        Already Registered?
                    </Link>

                </Form>
        
        );
    }
}

export default Register;