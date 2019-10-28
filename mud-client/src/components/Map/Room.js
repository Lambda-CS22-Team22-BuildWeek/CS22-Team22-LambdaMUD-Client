import React from 'react'

class Room extends React.Component {

    
    render(){
        console.log(this.props)

        return(
            <div 
                className="room"
                style={{
                    position: "absolute",
                    top: `${this.props.room.x}px`,
                    left: `${this.props.room.y}px`,
                    border: "1px solid black",
                    width: "40px",
                    height: "40px"
                }}
            >
                {this.props.room.id}
            </div>
        )
    }
}

export default Room;