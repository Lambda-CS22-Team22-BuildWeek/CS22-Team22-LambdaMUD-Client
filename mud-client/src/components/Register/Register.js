import React, { Component } from "react";
import axios from "axios";
import { connect } from 'react-redux'; 
import config from "../../config/index";
import { Link } from "react-router-dom";
import {
    Form,
    FormInput,
    FormLabel,
    FormSubmitButton,
    FormHeader,
} from "../Custom/Forms";

import { handleOnChange, login } from '../../redux/actions'

class Register extends Component {

    handleInput = e => {
        this.props.handleOnChange({name: e.target.name, value: e.target.value})
    };

    handleSubmit = e => {

        e.preventDefault();

        const credentials = {
            "username": this.props.username,
            "email": this.props.email,
            "password1": this.props.password1,
            "password2": this.props.password2
        };

        this.props.login(credentials, 'registration')
        this.props.history.replace((`/`));

        // this.setState({
        //     loading: true
        // });

        // axios
        //     .post(`${this.props.baseURL}/registration/`, credentials)
        //     .then(res => {

        //         localStorage.setItem("authToken", res.data.key);

        //         this.setState({
        //             username: "",
        //             email: "",
        //             password1: "",
        //             password2: "",
        //             loading: false
        //         });

        //         this.props.history.push((`/`));
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });

        // this.setState({
        //     ...this.state,
        //     username: "",
        //     password1: "",
        //     password2: "",
        //     loading: false
        // })
    };
    render() {
        console.log(this.props)
        return (
            
                <Form onSubmit={this.handleSubmit}>
                   
                    <FormHeader>MUD Register</FormHeader>

                    <FormLabel name="username">
                        <FormInput
                            onChange={this.handleInput}
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={this.props.username}
                        />
                    </FormLabel>

                    <FormLabel name="email">
                        <FormInput
                            onChange={this.handleInput}
                            type="text"
                            name="email"
                            placeholder="email"
                            value={this.props.email}
                        />
                    </FormLabel>

                    <FormLabel name="password1">
                        <FormInput
                            onChange={this.handleInput}
                            type="password"
                            name="password1"
                            placeholder="Password"
                            value={this.props.password1}
                        />
                    </FormLabel>

                    <FormLabel name="password2">
                        <FormInput
                            onChange={this.handleInput}
                            type="password"
                            name="password2"
                            placeholder="Confirm Password"
                            value={this.props.password2}
                        />
                    </FormLabel>

                    <FormSubmitButton type="submit" disabled={!this.props.password1 && !this.props.password2} onClick={this.handleSubmit}>
                        Register
                    </FormSubmitButton>

                    <Link to="/login">
                        Already Registered?
                    </Link>

                </Form>
        
        );
    }
}

const mapStateToProps = state => ({

    username: state.registerState.username,
    email: state.registerState.email,
    password1: state.registerState.password1,
    password2: state.registerState.password2,
    
})

export default connect(
    mapStateToProps,
    { handleOnChange, login }
)(Register);