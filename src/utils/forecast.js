const request = require('request');

const forecast = (latitude,longitude,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=fa4dc3ed6084f2b0bbc7da77aa485206&query='+latitude+','+longitude+'&units=f';

    request({url,json:true},(err,{body})=>{
        if(err){
            callback('Unable to connect Weather Service!',undefined);
        }
        else if(body.error){
            callback('Unable to find location',undefined);
        }
        else{
            let prediction = `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees. Humidity is ${body.current.humidity}%.`;
            callback(undefined,prediction);
        }  
    });
}

module.exports=forecast;