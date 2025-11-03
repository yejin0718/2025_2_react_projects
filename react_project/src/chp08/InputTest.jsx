import React, {useState} from "react";

function InputTest() {
    const[inputValue, setInputValue] = useState("");

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    return(
        <div align="center" style={{margin: 200}}>
            <input type="text" onChange={handleChange}/>
            <h2 id={"result"}>입력된 내용: {inputValue}</h2>
        </div>
    );
}

export default InputTest;