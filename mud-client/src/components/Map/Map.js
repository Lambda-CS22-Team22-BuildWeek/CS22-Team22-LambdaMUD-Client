import React, { Component } from "react";
import { MapMaker } from "./MapHelpers";
import Player from '../Player/Player'
import Room from './Room'
import config from "../../config/index";

const Map = props => {
    console.log(props.firstRoom)
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

            {props.rooms.map(room =>  <Room position={room.cord} room={room} />)}
            <Player
                position={props.playerPosition}
                setPosition={props.setPlayerPosition}
            />
        </div>
    )
}

export default Map