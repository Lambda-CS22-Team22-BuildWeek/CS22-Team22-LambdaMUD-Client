import React from 'react'

class Room extends React.Component {

    
    render(){
        console.log(this.props)

        return(
            <div 
                className="room"
                style={{
                    position: "absolute",
                    // top: props.x,
                    // left: props.y,
                    border: "1px solid black",
                    width: "40px",
                    height: "40px"
                }}
            >
                Hello
            </div>
        )
    }
}

export default Room;