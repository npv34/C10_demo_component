import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header/Header";

function Weather() {

    const [cTemp, setCTemp] = useState();

    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                lat: 21.0278,
                lon: 105.8342,
                appid: '02e3323f29bc461c2346db2fe3989729'
              }
        }).then(response => {
            let data = response.data;
            let temp = data.main.temp - 273;
            setCTemp(temp)
        } )
    }, [])

    return (
        <>
            <Header/>
            Ha Noi - {cTemp} C
        </>
    )
}

export default Weather;