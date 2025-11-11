import React, {useState} from "react";
import './SignUp.css'

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("여성");
    const [interests, setInterests] = useState("");

    const handleSubmit = (event) => {
        alert(`
            name: ${name}
            email: ${email}
            gender: ${gender}
            interests: ${interests}
        `)
    };

    return (
        <div>
            <h2>회원 가입</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    성명:
                    <input type="text" value={name} onChange={(event) => {
                        setName(event.target.value);
                    }} required/>
                </label>
                <label>
                    이메일:
                    <input type="text" value={email} onChange={(event) => {
                        setEmail(event.target.value);
                    }} required/>
                </label>
                <label>
                    비밀번호:
                    <input type="password" value={password} onChange={(event) => {
                        setPassword(event.target.value);
                    }} required/>
                </label>
                <label>
                    성별:
                    <select value={gender} onChange={(event) => {
                        setGender(event.target.value)
                    }}>
                        <option value={"남성"}>남성</option>
                        <option value={"여성"}>여성</option>
                    </select>
                </label>
                <label>
                    관심사:
                    <textarea value={interests} onChange={(event) => {
                        setInterests(event.target.value);
                    }} placeholder={"관심사를 입력해주세요."}></textarea>
                </label>

                <button >가입하기</button>
            </form>
        </div>
    );
}

export default SignUp;