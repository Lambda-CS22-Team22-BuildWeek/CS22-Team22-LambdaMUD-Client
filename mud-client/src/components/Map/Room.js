import React from 'react'

const Room = props => {
    
    console.log(props.position[0])
    // console.log(props.firstRoom.fields.title)
    return(
        <div 
            className="room"
            style={{
                position: "absolute",
                top: props.room.cord[0],
                left: props.room.cord[1],
                border: "1px solid black",
                width: "50px",
                height: "50px"
            }}
        >
            {props.room.fields.title}
        </div>
    )
}

export default Room;