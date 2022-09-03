import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({  //shape of the pointer from - to
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

export default function Routing() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    map.on('click', function (e) {
        console.log(e)
        const routingControl = L.Routing.control({
            waypoints: [
                L.latLng(e.latlng.lat,  e.latlng.lng),
                L.latLng(e.latlng.lat, e.latlng.lng)] ,  routeWhileDragging: true }).addTo(map);  
            return () => map.removeControl(routingControl);
        }, [map]);
        })
       
      
        return null;
      }
