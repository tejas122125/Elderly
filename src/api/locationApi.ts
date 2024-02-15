type placetype = {
    place :string,
    city:string,
    state:string,
}


export async function fetchCoordinates(place:string,state:string,city:string) {
    const response = await fetch(`https://api.geoapify.com/v1/geocode/search?street=${place}&city=${city}&state=${state}&country=India&lang=en&limit=5&format=json&apiKey=da99992ada14459aa90df25590da91c2`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const res = await response.json()
    const coordinates = {longitude : res.results[0].lon,
    latitude : res.results[0].lat}
    return JSON.stringify(coordinates)
  }