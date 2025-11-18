import React, {useState} from "react";
import DistanceInput from "./DistanceInput";
import "./DistanceConverter.css"

function toKilometers(miles) {
    return miles * 1.60934;
}

function toMiles(km) {
    return km / 1.60934;
}

function tryConvert(distance, convert) {
    const input = parseFloat(distance);
    if(Number.isNaN(input)) {
        return '';
    }
    const output = Math.round(convert(input)*1000)/1000;
    return output.toString();
}

function DistanceConverter() {
    const [distance, setDistance] = useState("");
    const [unit, setUnit] = useState("km");

    const handleKilometerChange = (distance)=>{
        setDistance(distance);
        setUnit("km")
    }

    const handleMileChange = (distance)=>{
        setDistance(distance);
        setUnit("mile")
    }

    const kilometers = unit==="mile" ? tryConvert(distance, toKilometers): distance;
    const miles = unit==="km" ? tryConvert(distance, toMiles) : distance;

    return(
        <div>
            <h1>거리단위변환기</h1>
            <div>
                <DistanceInput
                    unit={"km"}
                    distance={kilometers}
                    onDistanceChange={handleKilometerChange}
                />
                <DistanceInput
                    unit={"mile"}
                    distance={miles}
                    onDistanceChange={handleMileChange}
                />
            </div>
            <p>
                {kilometers}km는 {miles}mile 입니다.
            </p>
        </div>
    );
}

export default DistanceConverter;