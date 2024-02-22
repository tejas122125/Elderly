// import 'dotenv/config'

type placetype = {
    place :string,
    city:string,
    state:string,
}


export async function fetchCoordinates(place:string,state:string,city:string) {
    const response = await fetch(`https://api.geoapify.com/v1/geocode/search?street=${place}&city=${city}&state=${state}&country=India&lang=en&limit=5&format=json&apiKey={import.meta.env.VITE_GEOAPIFY_API}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const res = await response.json()
    return res
    const coordinates:{longitude:number,latitude:number} = {longitude : res.results[0].lon,
    latitude : res.results[0].lat}
    // return JSON.stringify(coordinates)
  }