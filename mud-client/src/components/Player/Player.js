import React from 'react'
import walkSprite from './player_walk.png'
const Player = () => {

    return(
        <div 
            className="player"
            style={{
                position: "absolute",
                // top:`${x}px`,
                // left:`${y}px`,
                width: '40px',
                height: '40px',
                // backgroundImage: `url('${walkSprite}')`
                border: '1px solid red'
            }}    
        />
           
        
    )
}

export default Player