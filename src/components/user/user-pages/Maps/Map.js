import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "./Map.css"
import { Icon } from 'leaflet';

const MapComponent = () => {
    const position = [11.240428987954877, 124.99738625335574];
      // Replace this with your own Mapbox access token and desired map style
    const mapboxAccessToken = 'pk.eyJ1IjoiamhvbnViYWxkbzE0MTMiLCJhIjoiY2xoNmlydXo4MDZlMjNscGVrdWpiaDRicCJ9.pGkcOOehFjPMIOwUCnCuiQ';
    const mapboxStyle = 'mapbox/streets-v11';
    const markers = [{
        geocode: [11.240428987954877, 124.99738625335574],
        popUp : "Eastern Visayas State University"

    }];
    const customIcon = new Icon({
        iconUrl : require("../../../../assets/pin.png"),
        iconSize: [50,50]
    });

  const mapboxTileUrl = `https://api.mapbox.com/styles/v1/${mapboxStyle}/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`;
    return ( 
        <>
            <div className=' h-screen w-full'>
                <MapContainer center={position} zoom={15} >
                    <TileLayer
                        attribution='&copy; <a href="https://www.mapbox.com/feedback/">Mapbox</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url={mapboxTileUrl}
                    />
                    {markers.map((marker,index)=>(
                        <Marker key={index} position={marker.geocode} icon={customIcon}>
                            <Popup>{marker.popUp}</Popup>
                        </Marker>
                    ))}
                </MapContainer>          
            </div>
               
           
        </>
     );
}
 
export default MapComponent;