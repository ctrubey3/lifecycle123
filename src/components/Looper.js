import React from 'react';

function Looper(props){
    const [loop,setLoop]=React.useState(0);
    const colors = ["red","yellow","blue"];

    const loopThrough =()=>{
        setLoop(loop+1);
        if(loop===colors.length-1){
            setLoop(0);
        }
    };

    return(
        <div style={{backgroundColor:props.match.params.color}} onClick={loopThrough}>
            setCount(0)
            <button >loop</button>
            <h1>{colors[loop]}</h1>
        </div>
    )
}

export default Looper