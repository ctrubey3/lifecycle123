import React from 'react';

function Box(){


    let box = {
        backgroundColor: 'green',
        height: "100px",
        width: "100px",
        margin: "10px",
    }

    return(
        <div style={box}>
        </div>
    )
}

export default Box;