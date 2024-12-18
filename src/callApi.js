// import { useState } from "react"

const callApi = async(searchKey)=>{
    // const [data,setData]= useState(null)
    const city = searchKey;
    const apiKey = '40bf9f24ae3509f909c532dbf3951b81'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    

    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('City Not Found');
        }
        const result = await response.json();
        // console.log(result);
        
        return result; 
      } catch (error) {
        console.error('Error fetching weather data:', error.message);
        throw error; 
      }
}
export default callApi



