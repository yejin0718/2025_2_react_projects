import React from "react";
import Dialog from "./Dialog";
import "./WelcomeDialog.css"

function WelcomeDialog(props) {
    return(
        <div>
            <Dialog
                title={"어서 오세요"}
                message={"우리 사이트에 방문하신 것을 환영합니다!"}
                color={"blue"}
            />
            <Dialog
                title={"test1"}
                message={"testtest11"}
                color={"yellow"}
            />
            <Dialog
                title={"test2"}
                message={"testtesttesttest2222"}
                color={"purple"}
            />
        </div>
    );
}

export default WelcomeDialog;