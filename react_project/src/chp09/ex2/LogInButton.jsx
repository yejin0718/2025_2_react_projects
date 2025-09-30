import React from "react";

function LogInButton(props) {
    return <button onClick={props.onClick} style={{backgroundColor: 'blue', color: 'white'}}>로그인</button>;
}

export default LogInButton;