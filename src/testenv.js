// import "dotenv/config"

// import { useQuery } from "react-query"
const thing = import.meta.env.VITE_MAPTILER_API_KEY
console.log(thing)


// // query testing
// async function fetchCoordinates(place,state,city) {
//     const response = await fetch(`https://api.geoapify.com/v1/geocode/search?street=${place}&city=${city}&state=${state}&country=India&lang=en&limit=5&format=json&apiKey={process.env.REACT_APP_GEOAPIFY_API}`);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const res = await response.json()
//     // return res
//     const coordinates = {longitude : res.results[0].lon,
//     latitude : res.results[0].lat}
//     // return JSON.stringify(coordinates)
//   }
// const start = ()=>{
//     const { data, isLoading, isError } =useQuery('fetchcoordinates',()=>{

//         return fetchCoordinates("international institute of technology bhubaneswar","odisha","bhubaneswar")
//     } )
    
//     console.log(data)
// }
//  start()