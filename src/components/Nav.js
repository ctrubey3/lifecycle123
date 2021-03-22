import React from 'react';
import {NavLink} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <NavLink activeStyle={{fontWeight:"bold", color:"red"}} exact to={"/"}>Container</NavLink>
            <NavLink activeStyle={{fontWeight:"bold", color:"red"}} to={"/looper/red"}>Looper</NavLink>
        </nav>
    )
}

export default Nav;