import React, { Component } from "react";
import axios from "axios";
import config from "../../config/index";
import { Link } from "react-router-dom";

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

        const baseURL = 'https://lambda-mud-test.herokuapp.com/api'
        
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
            
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="username" 
                        value={this.state.username} 
                        name="username" 
                        onChange={e => this.handleInput(e)}
                    />

                    <input 
                        type="password" 
                        placeholder="password" 
                        value={this.state.password} 
                        name="password" 
                        onChange={e => this.handleInput(e)}
                    />

                    <input type="submit" 
                        value="sub" 
                        onClick={this.handleSubmit}
                    />


                </form>
            
        );
    }
}

export default Login;