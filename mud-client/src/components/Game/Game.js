import React, { Component } from "react";
import DirectionButtons from "../DirectionButtons/DirectionButtons";
import config from "../../config/index";
import axios from 'axios'
import Map from '../Map/Map'
//Will add other components here as we get going

export default class Game extends Component {
    state = {
        userID: "",
        name: "",
        description: "",
        moveDirection: "",
        error_message: "",
        current_room: '',
        firstRoom: {},
        baseURL: 'http://lambda-mud-test.herokuapp.com/api',
        allRooms: [],
        playerPosition: [0, 0]
    };

    //test api 'https://lambda-mud-test.herokuapp.com/api'

    

    

    handleMove = direction => {

        config
        .axiosWithAuth()
        .post(`${this.state.baseURL}/adv/move/`, {direction})
        .then(({ data: { description, name, error_message, title } }) => {
            error_message
                ? this.setState({
                    description,
                    name,
                    error_message,
                    moveDirection: ""
                })
                : this.setState({
                    current_room: title,
                    description,
                    error_message,
                    moveDirection: direction,
                });
        })
        .catch(err => console.log(err));

        console.log(this.state.current_room)
    };

    initialize = () => {

    
        const baseURL = 'http://lambda-mud-test.herokuapp.com/api'
        config
            .axiosWithAuth()
            .get(`${baseURL}/adv/init/`)
            .then(({ data: { userID, name, description, title } }) => {
                console.log(name, description)
                this.setState({
                    userID,
                    name,
                    description,
                    current_room: title,
                    firstRoom: {...this.state.allRooms[0]}
                });
            })
            .catch(err => {
                console.log(err.message);
            });
    };

        logOut = _ => {

            localStorage.removeItem('authToken')
            this.props.history.push('/')
        }

        componentDidMount = async _ => {
            console.log('didmount')
    
            this.initialize()
    
            window.addEventListener('keydown', e => {
                console.log(e.keyCode)
                switch(e.keyCode){
                    case 37:
                        return (this.setState({
                            ...this.state, playerPosition:[this.state.playerPosition[0] -= 50, this.state.playerPosition[1]]
                            
                        }), this.handleMove('w'))
                    
                    case 38:
    
                        return (this.setState({...this.state, playerPosition:[this.state.playerPosition[0], this.state.playerPosition[1] -= 50]}), this.handleMove('n'))
                    case 39:
    
                        return (this.setState({...this.state, playerPosition:[this.state.playerPosition[0] += 50, this.state.playerPosition[1]]}), this.handleMove('e'))
                    case 40:
    
                        return (this.setState({...this.state, playerPosition:[this.state.playerPosition[0], this.state.playerPosition[1] += 50]}), this.handleMove('s'))
                }
            })
    
           
            const res = await axios.get(`${this.state.baseURL}/adv/rooms`)
            this.setState({
                ...this.state,
                allRooms: // gets all rooms from api, parses data and loops over to add a coordinates property to each room.
                    JSON.parse(res.data.rooms)
                    .map(room => room = {...room, cord: [Math.floor(Math.random() * 20) * 50, Math.floor(Math.random() * 10) * 50]} ),
                
            })
    
            this.state.allRooms[0].cord = [450, 450]
            this.state.allRooms[2].cord = [400, 450]
            this.state.allRooms[3].cord = [400, 500]
            this.state.allRooms[1].cord = [350, 450]
            this.state.allRooms[4].cord = [350, 500]
    
            this.setState({
                ...this.state,
                firstRoom: this.state.allRooms[0],
            })
    
            
    
            this.setState({
                ...this.state,
                playerPosition: [...this.state.firstRoom.cord],
            })
    
            console.log(this.state.allRooms)
        }
        

      
        render() {
            let { moveDirection } = this.state;
            console.log(this.state.current_room)
            // this.initialize()s

        //Add rest between Section tags
            return (
                <>
                    <section>
                        <input type="submit" value="Start" onClick={this.initialize} />
                        <input type="submit" value="Logout" onClick={this.logOut} />
                        <h1>Welcome, {this.state.name}</h1>
                        <h2>{this.state.current_room}</h2>
                        <h3>{this.state.description}</h3>
                        <p>Press start and use your arrow keys for movement between rooms</p>
                    </section>
                    <Map 
                        firstRoom={this.state.firstRoom} 
                        playerPosition={this.state.playerPosition} 
                        rooms={this.state.allRooms} 
                    />                
                </>
            );
        }
        }