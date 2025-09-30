import React, {useState} from "react";
import LogOutButton from "./LogOutButton";
import LogInButton from "./LogInButton";
import Greeting from "../ex1/Greeting";

function LogInControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogInClick = ()=>{
        setIsLoggedIn(true)
    }

    const handleLogOutClick = ()=>{
        setIsLoggedIn(false)
    }

    let btn;

    if(isLoggedIn) {
        btn = <LogOutButton onClick={handleLogOutClick}/>
    } else {
        btn = <LogInButton onClick={handleLogInClick}></LogInButton>
    }

    return(
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {btn}
        </div>
    );
}

export default LogInControl;