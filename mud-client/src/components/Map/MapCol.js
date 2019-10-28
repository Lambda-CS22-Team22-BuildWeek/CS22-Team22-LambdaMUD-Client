import React from 'react';

const MapCol = props => {

    return(
        <div className="gridCol" style={{width: '40px', height: '40px'}}> {props.col} </div>
    )
}

export default MapCol;