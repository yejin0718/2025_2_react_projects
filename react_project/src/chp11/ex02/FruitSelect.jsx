import React, {useState} from "react";
import "./FruitSelect.css"

function FruitSelect() {
    const [value, setValue] = useState();

    const handleChange = (event) =>{
        setValue(event.target.value);
    }

    const handleSubmit = (event)=>{
        alert(`선택된 과일: ` + value);
    }

    return(
        <form action={handleSubmit}>
            <label>
                과일을 선택하세요:
                <select value={value} onChange={handleChange}>
                    <option value={"persimmon"}>단감</option>
                    <option value={"orange"}>귤</option>
                    <option value={"apple"}>사과</option>
                    <option value={"watermelon"}>수박</option>
                    <option value={"melon"}>참외</option>
                    <option value={"strawberry"}>딸기</option>
                    <option value={"grapes"}>청포도</option>
                </select>
            </label>
            <button type={"submit"}>완료</button>
        </form>
    );
}

export default FruitSelect;