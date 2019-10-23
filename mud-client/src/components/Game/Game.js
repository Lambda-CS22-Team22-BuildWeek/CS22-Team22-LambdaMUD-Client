import React, { Component } from "react";
import DirectionButtons from "../DirectionButtons/DirectionButtons";
import config from "../../config/index";
//Will add other components here as we get going

export default class Game extends Component {
    state = {
        userID: "",
        name: "",
        description: "",
        moveDirection: "",
        error_message: "",
    };

    

    handleMove = direction => {
        const baseURL = 'https://team22adv.herokuapp.com/api'

        config
        .axiosWithAuth()
        .post(`${baseURL}/adv/move/`, {direction})
        .then(({ data: { description, name, error_message } }) => {
            error_message
                ? this.setState({
                    description,
                    name,
                    error_message,
                    moveDirection: ""
                })
                : this.setState({
                    description,
                    error_message,
                    moveDirection: direction
                });
        })
        .catch(err => console.log(err));
        };

        initialize = () => {
        
            const baseURL = 'https://team22adv.herokuapp.com/api'
            config
                .axiosWithAuth()
                .get(`${baseURL}/adv/init/`)
                .then(({ data: { userID, name, description } }) => {
                    console.log(name, description)
                    this.setState({
                        userID,
                        name,
                        description,
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        };
        componentDidMount() {
            // this.initialize();

            window.addEventListener('keydown', e => {
                console.log(e.keyCode)
                switch(e.keyCode){
                    case 37:
                        return this.handleMove('w')
                    
                    case 38:
                            return this.handleMove('n')
                    case 39:
                            return this.handleMove('e')
                    case 40:
                            return this.handleMove('s')
                }
            })
        }

        logOut = _ => {

            localStorage.removeItem('authToken')
            this.props.history.push('/')
        }
        
        render() {
            let { moveDirection } = this.state;
            console.log(this.props)

        //Add rest between Section tags
            return (
                <section>
                    <input type="submit" value="Start" onClick={this.initialize} />
                    <input type="submit" value="Logout" onClick={this.logOut} />
                    <h1>{this.state.description}</h1>
                    <p>Press start and use your arrow keys for movement between rooms</p>
                </section>
            );
        }
        }