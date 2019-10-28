import React, { Component } from "react";
import axios from "axios";
import config from "../../config/index";
import { connect } from 'react-redux';
import { handleOnChange, login } from '../../redux/actions'
import { Link } from "react-router-dom";
import {
    Form,
    FormInput,
    FormLabel,
    FormSubmitButton,
    FormHeader,
} from "../Custom/Forms";

class Login extends Component {

    handleInput = e => {
        this.props.handleOnChange({name: e.target.name, value: e.target.value})
    };

    handleSubmit = e => {

        e.preventDefault();

        const credentials = {
            "username": this.props.username,
            "password": this.props.password,
        };

        this.props.login(credentials, 'login', this.props.history)



        // const credentials = {
        //     username: this.props.username,
        //     password: this.props.password
        // };

        // this.setState({
        //     loading: true
        // });
        
        // axios
        //     .post(`${this.props.baseURL}/login/`, credentials)
        //     .then(res => {

        //         localStorage.setItem("authToken", res.data.key);

        //         this.setState({
        //             username: "",
        //             password: "",
        //             loading: false
        //         });

        //         this.props.history.push(`/`);
        //     });
    };

    render() {
        console.log(this.props)
        return(
            
            <Form onSubmit={this.handleSubmit}>
                <FormHeader>MUD Login</FormHeader>

                <FormLabel name="Username">
                    <FormInput
                        onChange={this.handleInput}
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.props.username}
                        />
                </FormLabel>

                <FormLabel name="password">
                    <FormInput 
                    onChange={this.handleInput}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.props.password}
                    />
                </FormLabel>

                <FormSubmitButton type="submit" onClick={this.handleSubmit} >
                    Login
                </FormSubmitButton>

                <Link to="/register">
                    Not registered yet?
                </Link>

            </Form>
            
        );
    }
}

const mapStateToProps = state => ({
    username: state.loginState.username,
    password: state.loginState.password
})

export default connect(
    mapStateToProps,
    { handleOnChange, login }
)(Login);