// import {useCallback, useState} from "react"
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
//
// const center = {
//     lat: -3.745,
//     lng: -38.523
// };
//
// export function CGoogleMap() {
//     const { isLoaded } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY
//     })
//
//     // const [map, setMap] = useState(null)
//
//     // const onLoad = useCallback(function callback(map) {
//     //     const bounds = new window.google.maps.LatLngBounds(center);
//     //     map.fitBounds(bounds);
//     //
//     //     setMap(map)
//     // }, [])
//     //
//     // const onUnmount = useCallback(function callback(map) {
//     //     setMap(null)
//     // }, [])
//
//     return isLoaded ? (
//         // <GoogleMap
//         //     center={center}
//         //     zoom={10}
//         //     onLoad={onLoad}
//         //     onUnmount={onUnmount}
//         // >
//         //     <></>
//         // </GoogleMap>
//     ) : <></>
// }