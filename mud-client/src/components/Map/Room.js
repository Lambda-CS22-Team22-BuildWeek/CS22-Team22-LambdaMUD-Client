import React from 'react'

const Room = props => {
    
    console.log(props)
    return(
        <div 
            className="room"
            style={{
                position: "absolute",
                top: props.x,
                left: props.y,
                border: "1px solid black",
                width: "50px",
                height: "50px"
            }}
        >
            Hello
        </div>
    )
}

export default Room;