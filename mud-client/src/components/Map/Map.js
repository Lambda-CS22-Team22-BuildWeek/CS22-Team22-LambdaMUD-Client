import React, { Component } from "react";
import { MapMaker } from "./MapHelpers";
import Player from '../Player/Player'
import Room from './Room'
import { connect } from 'react-redux';
import grid from './grid'
import config from "../../config/index";

const Map = props => {
    console.log(props)
    return(
        <div 
            className="world"
            style={{
                width: "1000px",
                height: "500px",
                backgroundColor: "green",
                margin: "10% auto",
                position: "relative"
            }}    
        >

            {props.allRooms.map(room =>  <Room room={room} />)}
            <Player
               playerPosition={props.playerPosition}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    allRooms: state.gameState.allRooms,
    playerPosition:{
        x: state.playerState.x,
        y: state.playerState.y
    }
})

export default connect(
    mapStateToProps
)(Map) 