import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ApiClima() {

    const [location, setLocation] = useState(false)
    const [weather, setWeather] = useState(false)

    let getWeather = async (lat, lon) => {
        let res = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
            params: {
                lat: lat,
                lon: lon,
                appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
                lang: 'pt',
                units: 'metric'
            }
        })
        setWeather(JSON.stringify(res.data))
    }
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeather(position.coords.latitude, position.coords.longitude)
            setLocation(true)
        })
    }, [])

    if (location === false) {
        return (
            <div>
                <strong>Você precisa habilitar a localização no seu Browser!</strong>
            </div>
        )
    } else {
        if (weather) {
            const el = JSON.parse(weather)
            return (
                <div>
                    <h3>Clima ({el.name})</h3>
                    <hr></hr>
                    <ul>
                        <li>Temperatura atual: <strong>{ el.main.temp }°</strong></li>
                        <li>Temperatura máxima: { el.main.temp_max }°</li>
                        <li>Temperatura mínima: { el.main.temp_min }°</li>
                        <li>Pressão: { el.main.pressure } hpa</li>
                        <li>Umidade: { el.main.humidity }%</li>
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <strong>...</strong>
                </div>
            )
        }
    }
    
}