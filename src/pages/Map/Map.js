import React , {useState} from "react";
import Data from  "../../PublicServices"      /*Json file which has the coordinates data */
import Univ from "../../UnivData"
import './Map.css'
import L, { map } from 'leaflet'
import Routing  from "./Routing";
import { popupContent, popupHead, popupText, okText } from "./Popup.js";



import { MapContainer, TileLayer, Marker, Popup , LayersControl , LayerGroup } from 'react-leaflet'

function Map() {

    //  Create the Icon
  const LeafIcon = L.Icon.extend({
    options: {}
  });

  const blueIcon = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF"
    }) ,
    greenIcon = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF"
    });
    //  Use the state hook:
  const [blue] = useState(blueIcon);
  const [green] = useState(greenIcon);

    // This function will change the state's icon:

    return (
        <div id="leafletmap">
            
        <MapContainer  center={[30.033333,31.233334]}  zoom={12} scrollWheelZoom={true}
        >
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

            />

            <LayersControl position="topright">
                <LayersControl.Overlay checked name="PublicPlaces">
                <LayerGroup>

                {Data.map(Data  =>( 
                <Marker id="marker" icon={blue}
                position={[Data.PublicServices.latitude,Data.PublicServices.longitude]}> 
                <Popup position={[Data.PublicServices.latitude,Data.PublicServices.longitude]}>
                <div>
                    <h4> {"Name: "+Data.PublicServices.Name}</h4>
                    <p> {"Details :" +Data.PublicServices.Information}</p>
                    <img 
                     src={Data.PublicServices.Image} 
                     alt="picc"
                     width="319px"

                     /> 
                    <img 
                    className="Image2" 
                    src={Data.PublicServices.Image2} 
                    alt="picc"
                    width="319px"
                    /> 
                
                </div> 
               
            </Popup>
            </Marker>
                    ))}
                </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay checked name="Universities">
                <LayerGroup>
                {Univ.map(Univ  =>( 
                <Marker id="marker" icon={green}
                position={[Univ.universities.latitude,Univ.universities.longitude]}> 
                <Popup position={[Univ.universities.latitude,Univ.universities.longitude]}>
                <div>
                    <h4> {"Name: "+Univ.universities.Name}</h4>
                    <p> {"Type :" +Univ.universities.Type}</p>
                    <img 
                     src={Univ.universities.Image} 
                     alt="picc"
                     width="319px"

                     /> 
                    <img 
                    className="Image2" 
                    src={Univ.universities.Image2} 
                    alt="picc"
                    width="319px"
                    /> 
                
                </div> 
              
            </Popup>
            </Marker>
                    ))}
                </LayerGroup>
                </LayersControl.Overlay>
            </LayersControl>
            <Routing/>
</MapContainer>
</div>  

); }

export default Map;