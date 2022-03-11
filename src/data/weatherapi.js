import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = '5aa860697df7e15300084a9a66051218';

export const getWeatherData = async (cityname) => {
    try{
        const {data} =await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`)
        return data;
    }catch(error) {
        throw error
    }
}