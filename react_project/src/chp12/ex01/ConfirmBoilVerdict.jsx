import React, {useState} from "react";
import BoilVerdict from "./BoilVerdict";
import './ConfirmBoilVerdict.css'

function ConfirmBoilVerdict() {
    const [temperature, setTemperature] = useState("");

    return(
        <fieldset>
            <legend>섭씨 온도를 입력하세요.</legend>
            <input value={temperature} onChange={(event) => {
                setTemperature(event.target.value);
            }} />
            <BoilVerdict celcius={temperature}/>
        </fieldset>
    );
}

export default ConfirmBoilVerdict;