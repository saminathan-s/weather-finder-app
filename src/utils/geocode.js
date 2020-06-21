const request = require('request');

const geocode = (address,callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2FtaW5hdGhhbi1zIiwiYSI6ImNrYmpubnU3dzA0ZXcyemx4M3YybDloOG8ifQ.zxU4ov2H8al22LYMVtXJcA&limit=1';

    request({url,json:true},(err,{body}) => {
        if(err){
            callback('Unable to connect Geocoding service!',undefined);
        }
        else if(!body.features.length > 0){
            callback('Unable to find the location mentioned',undefined);
        }
        else{

            callback(undefined,{
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location: body.features[0].place_name,
            });
        }
    })
}

module.exports=geocode;