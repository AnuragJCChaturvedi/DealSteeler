import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, useLoadScript } from '@react-google-maps/api';

import PropTypes from 'prop-types';

const mapContainerStyle = {
  height: '400px',
  width: '100%',
};

const defaultCenter = { lat: -34.397, lng: 150.644 };
const defaultZoom = 15;
const libraries = ['places'];

const shopTypes = ['Nike', 'Starbucks', 'Adidas', 'Walmart', 'Apple', 'Target'];

function GoogleMapsComponent({ handlePlaceChange }) {

  let i = 0

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBGsjsehQcsQTzWDWwSWSTRlCVR43GkyoQ',
    libraries,
  });
  const [currentLocation, setCurrentLocation] = useState(defaultCenter);
  const mapRef = useRef(null);

  const [places, setPlaces] = useState([])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCurrentLocation(pos);
          if (mapRef.current) {
            mapRef.current.setCenter(pos);
            fetchShops(pos);
          }
        },
        () => {
          alert('The Geolocation service failed.');
        }
      );
    } else {
      alert("Your browser doesn't support geolocation.");
    }
  }, [isLoaded]); // Dependency on isLoaded to ensure the map is ready

  const fetchShops = (pos) => {
    const service = new window.google.maps.places.PlacesService(mapRef.current);
    let shopsResults = {};
    let searchesCompleted = 0;
    let mplaces = []

    shopTypes.forEach((shopType) => {
      service.nearbySearch(
        {
          location: pos,
          radius: '3000', // Adjust radius as needed
          keyword: shopType,
        },
        (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {

            const mappedResults = results.map((result) => ({
              ...result,
              distance: calculateDistance(pos, result.geometry.location), // Assuming you have this function defined
              wCategoryName: shopType
            }));

            shopsResults[shopType] = mappedResults;


            mplaces.push(...mappedResults)
          }

          searchesCompleted++;
          if (searchesCompleted === shopTypes.length) {
            handlePlaceChange(shopsResults); // Call the parent callback once all searches are done
            setPlaces(mplaces)
            setTimeout(() => {console.log(places)})
          }
        }
      );
    });
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={defaultZoom}
      center={currentLocation}
      onLoad={(map) => (mapRef.current = map)}
    >
     

        {/* Marker for Current Location */}
        <Marker position={currentLocation} />

        {
        //   places.map((place) => (
        //   // <Marker key={place.place_id} position={place.geometry.location} />
        //   <Marker key={place.place_id + i++} 
        //   position={place.geometry.location}
        //   icon={{
        //     url: process.env.PUBLIC_URL + '/icons/' + place.wCategoryName  + '.png',
        //     scaledSize: new window.google.maps.Size(24, 24), // Adjust the size as needed
        //   }}
        //   />
        // ))

        places.map((place, index) => (
          <Marker 
            key={`${place.place_id}-${index}`} // Use a combination of place_id and index to ensure uniqueness
            position={{ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }}
            icon={{
              url: `${process.env.PUBLIC_URL}/icons/${place.wCategoryName.toLowerCase()}.png`, // Ensure the icon exists for each category
              scaledSize: new window.google.maps.Size(24, 24),
            }}
          />
        ))
        

        }

    </GoogleMap>
  );
}

function calculateDistance(from, to) {
  // The latitude and longitude values are obtained by calling lat() and lng() methods
  const lat1 = from.lat;
  const lon1 = from.lng;
  const lat2 = to.lat();
  const lon2 = to.lng();

  const radLat1 = Math.PI * lat1 / 180;
  const radLat2 = Math.PI * lat2 / 180;
  const theta = lon1 - lon2;
  const radTheta = Math.PI * theta / 180;
  const dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
  
  let distance = Math.acos(dist) * 180 / Math.PI * 60 * 1.1515;

  return distance;
}



GoogleMapsComponent.propTypes = {
  handlePlaceChange: PropTypes.func.isRequired,
};

export default GoogleMapsComponent;




// import React, { useState, useEffect, useRef } from 'react';
// import { GoogleMap, LoadScript, Marker, useLoadScript } from '@react-google-maps/api';

// import PropTypes from 'prop-types';

// const mapContainerStyle = {
//   height: '400px',
//   width: '100%',
// };

// const defaultCenter = { lat: -34.397, lng: 150.644 };
// const defaultZoom = 15;

// const libraries = ['places'];

// const shopTypes = ['Nike', 'Starbucks', 'Adidas', 'Walmart'];

// function GoogleMapsComponent({handlePlaceChange}) {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyBGsjsehQcsQTzWDWwSWSTRlCVR43GkyoQ',
//     libraries,
//   });
//   const [currentLocation, setCurrentLocation] = useState(defaultCenter);
//   const [places, setPlaces] = useState([]);
//   const mapRef = useRef(null);

//   const onMapLoad = (map) => {
//     mapRef.current = map;
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           setCurrentLocation(pos);
//           mapRef.current.setCenter(pos);

//           const service = new window.google.maps.places.PlacesService(mapRef.current);
//           service.nearbySearch(
//             {
//               location: pos,
//               radius: '3000',
//               type: ['cafe'],
//               keyword: 'Starbucks',
//             },
//             (results, status) => {
//               if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
//                 setPlaces(results);
//                 handlePlaceChange(results)
//               }
//             }
//           );
//         },
//         () => {
//           alert('The Geolocation service failed.');
//         }
//       );
//     } else {
//       // Browser doesn't support Geolocation
//       alert("Your browser doesn't support geolocation.");
//     }
//   };

//   if (loadError) return <div>Error loading maps</div>;
//   if (!isLoaded) return <div>Loading Maps</div>;

//   return (
//     <GoogleMap
//       mapContainerStyle={mapContainerStyle}
//       zoom={defaultZoom}
//       center={currentLocation}
//       onLoad={onMapLoad}
//     >
      // {/* Marker for Current Location */}
      // <Marker position={currentLocation} />

      // {/* Markers for Starbucks Locations */}
      // {places.map((place) => (
      //   // <Marker key={place.place_id} position={place.geometry.location} />
      //   <Marker key={place.place_id} 
      //   position={place.geometry.location}
      //   icon={{
      //     url: process.env.PUBLIC_URL + '/icons/starbucks.png',
      //     scaledSize: new window.google.maps.Size(24, 24), // Adjust the size as needed
      //   }}
      //   />
      // ))}
//     </GoogleMap>
//   );
// }

// // Wrap the component with LoadScript for places library loading
// function WrappedMapComponent({handlePlaceChange}) {
//   return (
//     <LoadScript googleMapsApiKey="AIzaSyBGsjsehQcsQTzWDWwSWSTRlCVR43GkyoQ" libraries={libraries}>
//       <GoogleMapsComponent handlePlaceChange={handlePlaceChange}/>
//     </LoadScript>
//   );
// }

// GoogleMapsComponent.propTypes = {
//   handlePlaceChange: PropTypes.func.isRequired,
// };

// WrappedMapComponent.propTypes = {
//   handlePlaceChange: PropTypes.func.isRequired,
// }

// export default WrappedMapComponent;

