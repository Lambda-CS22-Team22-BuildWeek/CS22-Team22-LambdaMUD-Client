import React, { Component } from "react";
import axios from "axios";
import config from "../../config/index";
import { Link } from "react-router-dom";

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

                </Form>
            </Body>
        );
    }
}

export default Register;