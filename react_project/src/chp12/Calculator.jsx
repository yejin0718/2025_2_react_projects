import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";
import BoilVerdict from "./ex01/BoilVerdict";
import './Calculator.css';

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return '';
    }
    const output = Math.round(convert(input)*1000) / 1000;
    return output.toString();
}

function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;         //F=>C
}

function toFahrenheit(celsius) {
    return ((celsius * 9) / 5) + 32;            //C=>F
}

function Calculator() {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    }

    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput scale={"c"} temperature={celsius} onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput scale={"f"} temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
            <BoilVerdict celcius={parseFloat(celsius)} />
        </div>
    );
}

export default Calculator;