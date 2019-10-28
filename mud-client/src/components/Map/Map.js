import React, { Component } from "react";
import { MapMaker } from "./MapHelpers";
import Player from '../Player/Player'
import Room from './Room'
import MapRow from './MapRow'
import { connect } from 'react-redux';
import {grid} from './grid'
import config from "../../config/index";

const Map = props => {
    console.log(props)
    return(
        <div 
            className="world"
            style={{
                width: "800px",
                height: "400px",
                backgroundColor: "green",
                margin: "10% auto",
                position: "relative",
                overflow: 'scroll'
            }}    
        >
            {/* {grid.map(row => <MapRow row={row} />)} */}
            {props.allRooms.map(room =>  <Room room={room} grid={grid} />)}
            <Player
            //    playerPosition={props.playerPosition}
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