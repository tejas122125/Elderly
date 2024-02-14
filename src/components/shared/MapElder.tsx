import { useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import 'leaflet-geometryutil';
import {io} from 'socket.io-client';

const MapElder = () => {
  let currentzoomlevel = 19.3;
  const [loaded, setloaded] = useState(false)
  const [currentPosition, setCurrentPosition] = useState<GeolocationPosition>()

  const monu = { lng: 85.74388871538068, lat: 20.294283031340488 };
  const markercoordinates = [85.74388871538068, 20.294283031340488]
  const radiusinmetre = 1000;

  // maptilersdk.config.apiKey =import.meta.env.MAPTILER_API_KEY ;
  maptilersdk.config.apiKey = "Vo8jQCErgCizFnecLk6a";

  // checking the elders position location 
  const checkEldersposition = (distance: number): Number => {
    if (distance / 100000 < 400) {
//green
      return 0;
    }
    else if (distance/1000000 > 400 && distance < 700) {
      //yellow
      return 1;
    }
    else {
      //red
      return 3;
    }
  }

  const getCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition(position)
        },
        error => {
          console.error('Error getting user position:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  // Call the function to get the current location

  const calculateDistanceBetweenPoints = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371e3; // Radius of the Earth in meters
    const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in meters
  };
  // call the funtion to get required circle points

  function getCircle(radius: number, center: number[]) {

    const points = [];
    const steps = 1000; // Number of steps to create the circle
    for (let i = 0; i < steps; i++) {
      const angle = (i / steps) * 2 * Math.PI;
      const latitude = center[0] + (radius / (1113000 * Math.cos(markercoordinates[0] * (Math.PI / 180)))) * Math.cos(angle);
      const longitude = center[1] + (radius / (1113000 * Math.cos(markercoordinates[0] * (Math.PI / 180)))) * Math.sin(angle);


      points.push([latitude, longitude]);
    }
    points.push(points[0])
    return [points]
  }


  useEffect(() => {
    // getCurrentLocation();
    const calculateDistance = async () => {

      getCurrentPosition();
      const distance = calculateDistanceBetweenPoints(currentPosition!.coords.latitude, currentPosition!.coords.longitude, markercoordinates[0], markercoordinates[1]);
      // setDistanceFromMarker(distance);
      // setUserLocation(position.coords);

    };
    const socket = io('http://localhost:3000');

    const watchUserLocation = () => {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          // setUserLocation(position.coords);
          const distance = calculateDistanceBetweenPoints(position.coords.latitude, position.coords.longitude, markercoordinates[0], markercoordinates[1]);
          const safe = checkEldersposition(distance)       
          console.log("first")
          // setting up the connection websocket
          const elderlocation = {
            safe: safe,
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
          }
          const jsonstring = JSON.stringify(elderlocation)
          socket.emit('joinRoom', 'room1');
          // socket.emit('leaveRoom', 'room1');
          socket.emit('elderMessage', 'room1', jsonstring);
      
          console.log(distance)
        },
        error => {
          console.log('Error watching user location:', error);
        }, {
        enableHighAccuracy: true,
        maximumAge: 10000, // 10 seconds
        timeout: 5000      // 5 seconds
      }
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };

    };
    calculateDistance();

    // Watch for continuous updates to user's location
    const watchId = watchUserLocation();

    const map = new maptilersdk.Map({
      container: 'mapdiv',
      center: [85.74385875327162, 20.29430077034791],
      zoom: 13,
      style: maptilersdk.MapStyle.STREETS,
      hash: true,
    });

    map.on('load', () => {
      setloaded(true)



      const popupelement = document.createElement('div')
      popupelement.classList.add("p-4", "absolute", 'bg-green-600', "rounded-lg")
      popupelement.innerText = "tejaswweenfhn is good boy"
      let Popup = new maptilersdk.Popup()
      Popup.setDOMContent(popupelement)

      console.log("bfjhb", map.loaded())


      const marker = new maptilersdk.Marker({
        color: "red",
        draggable: false,
      })
        .setLngLat([85.74385875327162, 20.294283031340488])
        .setPopup(Popup)
        .addTo(map);

      // adding circle


      map.addSource('red-area',
        {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: getCircle(radiusinmetre, markercoordinates),
            },
          },
        });
      map.addSource('yellow-area',
        {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: getCircle(radiusinmetre - 300, markercoordinates),
            },
          },
        });

      map.addSource('green-area',
        {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: getCircle(radiusinmetre - 600, markercoordinates),
            },
          },
        });


      map.addLayer({
        'id': 'point1',
        'source': 'red-area',
        'type': 'fill',
        paint: {
          'fill-color': '#FFCCCC',
          'fill-opacity': 0.4,
        },
      });
      map.addLayer({
        'id': 'point2',
        'source': 'yellow-area',
        'type': 'fill',
        paint: {
          'fill-color': '#FFFFCC',
          'fill-opacity': 0.4,
        },
      });
      map.addLayer({
        'id': 'point3',
        'source': 'green-area',
        'type': 'fill',
        paint: {
          'fill-color': '#CCFFCC',
          'fill-opacity': 0.5,
        },
      });
      // map.on('zoom',()=>{
      //   console.log(map.getZoom())
      //   currentzoomlevel = map.getZoom();
      // })

    })
    return () => {
      watchId
    };

  }, [monu.lng, monu.lat]);

  return (
    <div className="map-wrap">
      {/* <script src='/socket.io/socket.io.js'></script> */}
      {!loaded && <div className='bg-green-500'> monu jinda bad</div>}
      <div id='mapdiv' className="h-screen w-screen
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