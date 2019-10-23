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
            password: "",
            loading: false
        };
    }

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
                this.props.history.push((`/`));
            })
            .catch(err => {
                console.log(err.response.data);
            });
    };
    render() {
        return (
            <Body>
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

                    <FormLabel name="password">
                        <FormInput
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        />
                    </FormLabel>

                    <FormSubmitButton type="submit" disabled={!this.state.password}>
                        Register
                    </FormSubmitButton>

                    <Link to="/login">
                        Already Registered?
                    </Link>

                </Form>
            </Body>
        );
    }
}

export default Register;