import React, { Component } from "react";
import DirectionButtons from "../DirectionButtons/DirectionButtons";
import { connect } from 'react-redux';
import { initGame, fetchRooms, playerMove } from '../../redux/actions'
import Map from '../Map/Map'
//Will add other components here as we get going

class Game extends Component {

    logOut = _ => {

        localStorage.removeItem('authToken')
        this.props.history.replace('/')
    }

    componentDidMount = async _ => {
        console.log('didmount')

        this.props.initGame()
        this.props.fetchRooms()

        window.addEventListener('keydown', e => {
            console.log(e.keyCode)
            switch(e.keyCode){
                case 37:
                    return (this.props.playerMove('w'))
                
                case 38:

                    return (this.props.playerMove('n'))
                case 39:

                    return (this.props.playerMove('e'))
                case 40:

                    return (this.props.playerMove('s'))
            }
        })

        // const res = await axios.get(`${this.state.baseURL}/adv/rooms`)

        // this.setState({
        //     ...this.state,
        //     allRooms: res.data.all_rooms // gets all rooms from api, parses data and loops over to add a coordinates property to each room.
                
            
        // })

        
    }
    

    
    render() {
        // let { moveDirection } = this.state;
        console.log(this.props.playerPosition)

    //Add rest between Section tags
        return (
            <>
                <section>
                    <input type="submit" value="Start" onClick={this.initialize} />
                    <input type="submit" value="Logout" onClick={this.logOut} />
                    <h1>Welcome, {this.props.name}</h1>
                    <h2>{this.props.current_room}</h2>
                    <h3>{this.props.description}</h3>
                    <p>Press start and use your arrow keys for movement between rooms</p>
                </section>
                <Map 
                />                
            </>
        );
    }
}

    const mapStateToProps = state => ({
        name: state.playerState.name,
        current_room: state.playerState.current_room,
        description: state.gameState.description,
        playerPosition:{
            x: state.playerState.x,
            y: state.playerState.y
        }
    })

    export default connect(
        mapStateToProps,
        { initGame, fetchRooms, playerMove }
    )(Game)