import React, {Component} from "react";
import button from "../chp04/Button";

class Toggle extends Component{
    constructor(props) {
        super(props);

        this.state = {isToggleOn: true}

        this.handleClick = this.handleClick.bind(this);
    }
//     Event Handler형 함수로 정의
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return(
            <div align="center" style={{margin: 200}}>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? "On" : "Off"}
                </button>
            </div>
        );
    }
}

export default Toggle;