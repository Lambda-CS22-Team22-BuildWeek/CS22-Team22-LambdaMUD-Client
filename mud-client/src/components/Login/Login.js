import React, { Component } from "react";
import axios from "axios";
import config from "../../config/index";
import { Link } from "react-router-dom";

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

                </Form>
            </Body>
        );
    }
}

export default Login;