import React, {useState} from "react";
import "./NameForm.css"

function NameForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        const{target} = event;
        switch (target.id) {
            case "name":
                setName(target.value.toUpperCase());
                break;
            case "email":
                setEmail(target.value);
                break;
            case "value":
                setValue(target.value);
        }
    }

    const handleSubmit = (event) => {
        alert(`입력된 성명: ${name}\n입력된 이메일: ${email}\n요청사항: ${value}`);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                이름: <input type={"text"} id={"name"} onChange={handleChange}/>
            </label>
            <br />
            <label>
                Email: <input type={"email"} id={"email"} onChange={handleChange} />
            </label>
            <br />
            <label>
                요청사항:
                <textarea id={"value"} value={value} onChange={handleChange} placeholder={"요청사항을 입력하세요."} />
            </label>
            <br />
            <button type={"submit"}>제출</button>
        </form>
    );
}

export default NameForm;