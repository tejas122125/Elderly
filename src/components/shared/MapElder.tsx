import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { config, Map, MapOptions } from '@maptiler/sdk';

const MapElder = () => {
    const tokyo = { lng: 85.74388871538068, lat:  20.294283031340488};
    const [zoom] = useState(18);
    // maptilersdk.config.apiKey =import.meta.env.MAPTILER_API_KEY ;
    maptilersdk.config.apiKey = "Vo8jQCErgCizFnecLk6a" ;

    // const mapContainer = useRef(null);
    const mapContainer = useRef(null)
    // const conatainer =document.getElementById("mapdiv") as HTMLElement
    const map = useRef(null);
   
    
    // Call the function to get the current location
  
    useEffect(() => {
      if (map.current) return; // stops map from intializing more than once

      console.log("first")
     
      map.current = new maptilersdk.Map ({
        container: mapContainer.current!,
        style: maptilersdk.MapStyle.STREETS,
        center: [tokyo.lng, tokyo.lat],
        zoom: zoom
      }) 
      const popupelement = document.createElement('div')
popupelement.classList.add("p-4", "absolute", 'bg-green-600' ,"rounded-lg")
popupelement.innerText = "tejaswweenfhn is good boy"
      let Popup = new maptilersdk.Popup()
      Popup.



      const marker = new maptilersdk.Marker({
        color: "red",
        draggable: false,
      }).setLngLat([85.7438887, 20.294283031340488])
      .setPopup(Popup)
   
      .addTo(map.current!);
  
     
    }, [tokyo.lng, tokyo.lat, zoom]);
  
    return (
      <div className="map-wrap">
       
        <div id='mapdiv' ref={mapContainer} className="h-screen w-screen
         relative " />
      </div>
    );
}

export default MapElder

















// import React, { useEffect } from 'react';
// import ReactMapGL, { Marker  } from 'react-map-gl';
// import ViewportProps from 'react-map-gl'
// import { useState } from 'react';
// ;
// import mapboxgl, { Map as MapboxMap } from 'mapbox-gl';

// const MapElder = () => {

// type mapbox={
//     width :string,
//     height : string,
//     latitude : number,
//     longitude : number,
//     zoom : number
// }
// // const [viewport,setviewport] = useState<>(
// //     {
// //         width: '100%',
// //         height: '100%',
// //         latitude: 37.7577,
// //         longitude: -122.4376,
// //         zoom: 8
// //     }

// // )

// useEffect(() => {
//     mapboxgl.accessToken = "pk.eyJ1IjoibGVpZ2hoYWxsaWRheSIsImEi0iJjanVma3E4aGMwZjk0NDVwZzFpcG84M3cwIn.GrI8s893TPtJfjHzpMMP_A"
//     const map = new MapboxMap({
//       container: 'map-container',
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [-122.4376, 37.7577],
//       zoom: 8
//     });

//     return () => {
//       map.remove();
//     };
//   }, []);


//   return (
//      <div id="map-container" style={{ width: '100%', height: '100vh' }} />
//   )
// }

// export default MapElder