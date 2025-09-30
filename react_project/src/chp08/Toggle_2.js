import React, {Component} from "react";
import button from "../chp04/Button";

class Toggle_2 extends Component{
    constructor(props) {
        super(props);

        this.state = {isToggleOn: true}
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
                {/*생성자에서 this 키워드를 사용하기 위한 바인딩을 생략하려면 이렇게 작성해야 함*/}
                <button onClick={() => this.handleClick()}>
                    Bind 생략 {this.state.isToggleOn ? "On" : "Off"}
                </button>
            </div>
        );
    }
}

export default Toggle_2;