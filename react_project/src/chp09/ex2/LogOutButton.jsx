import React from "react";

function LogOutButton(props) {
    return <button onClick={props.onClick} style={{backgroundColor: 'red', color: 'white'}}>로그아웃</button>;
}

export default LogOutButton;