import React from "react";

function Container() {
    const [color, setColor]=React.useState("green");


    const [data] = React.useState([
        {
            backgroundColor: color,
            height: "100px",
            width: "100px",
            margin: "10px",
        },
        {
            backgroundColor: 'blue',
            height: "100px",
            width: "100px",
            margin: "10px",
        },
    ]);

    const [visual, setVisual]= React.useState(data);
    const [count,setCount]=React.useState(0);
    const [oddNumberValue, setOddNumberValue]= React.useState(0);


    const i = () => {
        setVisual(count => count + 1);
    };

    React.useEffect(()=>{
        let newArray;
        if(count % 2 !== 0){
            setOddNumberValue(oddNumberValue +1);
        }
        if (count % 5 === 0){
            let randomColor = 52345 * Math.floor(Math.random()*10);
            let randomColorString = "#" + randomColor;
            setColor(randomColorString);
        }

        if(count===1){
            setVisual(i+1);
        }
        else{
            newArray=data;
        }

        setVisual(newArray);

    },[data,count]);

    return (
        <div className="container">
            <button onClick={()=>setCount(count +1)}>Add</button>
            <button onClick={()=>setCount(0)}>Clear</button>
            <p> {count}</p>
            <div style={{backgroundColor:color, height:"100px", width:"100px", margin:"10px"}}></div>

            {[...Array(oddNumberValue)].map((_, i) => <div style={{backgroundColor:color, height:"100px", width:"100px", margin:"10px"}}></div>
            )}

        </div>

    )
}

export default Container;



