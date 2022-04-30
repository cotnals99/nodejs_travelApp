//Control all API calls

import axios from "axios";

// const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

// const options = {
//   params: {
//     bl_latitude: '11.847676',
//     bl_longitude: '108.473209',
//     tr_longitude: '109.149359',
//     tr_latitude: '12.838442',
//     limit: '30',
//     currency: 'USD',
//     subcategory: 'hotel,bb,specialty',
//     adults: '1'
//   },
//   headers: {
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
//     'X-RapidAPI-Key': '2a8d1e7f13msh38945db7e8c570ap1b7baajsnbb927d641e1a'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

export const getPlacesData = async (sw, ne) => {
    try {
        //request
        const {data: {data}} = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            tr_latitude: ne.lat,
            // limit: '30',
            // currency: 'USD',
            // subcategory: 'hotel,bb,specialty',
            // adults: '1'
          },
          headers: {
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            'X-RapidAPI-Key': '2a8d1e7f13msh38945db7e8c570ap1b7baajsnbb927d641e1a'
          }
        });
        console.log(data)
        return data;

        // const response = await axios.get(URL, options);
        // console.log(response)
        // return response


    } catch (error) {
        console.log(error)
    }
}