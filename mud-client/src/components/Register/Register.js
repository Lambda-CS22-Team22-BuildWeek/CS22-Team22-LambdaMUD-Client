import React, { Component } from "react";
import axios from "axios";
import config from "../../config/index";
import { Link } from "react-router-dom";

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
        console.log('onChange')
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

        const baseURL = 'https://lambda-mud-test.herokuapp.com/api'

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
                        name="password1" 
                        onChange={this.handleInput}
                    />

                    <input 
                        type="password" 
                        placeholder="password" 
                        value={this.state.password} 
                        name="password2" 
                        onChange={this.handleInput}
                    />

                    <input type="submit" value="sub" onClick={this.handleSubmit}/>

                </form>
        
        );
    }
}

export default Register;