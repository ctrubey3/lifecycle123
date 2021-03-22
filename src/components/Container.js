import React from 'react';
import Box from "./Box";

function Container() {
    const [count, setCount] = React.useState(1);
    const [color, setColor]=React.useState("#ff0051");



    const numbers = [1];
    const plus1 = numbers.map((number) => number +1);
    console.log(plus1);

    React.useEffect(()=>{



        if(count>=5){
            setColor("black");
        }
        if(count>=10){
            setColor("blue");
        }
    },[count]);


    return (
        <div className="container">

            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Add Box</button>
            <div style={{backgroundColor:color, height:"100px", width:"100px"}}>add box</div>
            {[...Array(count)].map((_, i) => <Box key={i} />) }



        </div>
    )
}

export default Container;
