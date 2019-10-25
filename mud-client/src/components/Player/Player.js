import React from 'react'

const Player = ({ position, setPosition }) => {

    return(
        <div 
            className="player"
            style={{
                position: "absolute",
                top: position[1],
                left: position[0],
                width: '50px',
                height: '50px',
                border: '1px solid red'
            }}    
        />
           
        
    )
}

export default Player