import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import React from "react";

import './map.scss'
interface HotChocolate {
    city: String,
    country: String,
    region: String,
    lat: number,
    lon: number,
    uniqueVisitors?: Number,
    description?: String
};
interface FavoritesMapProps {
    list: {
        city: String,
        country: String,
        region: String,
        lat: number,
        lon: number,
        uniqueVisitors?: Number,
        description?: String
    }[]
}


const icon : L.DivIcon = L.divIcon({
    className: "hot-chocolate-icon",
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15, 0]
});

const daya: HotChocolate[] = [
    {
        city: "Helsinki",
        country: "Finland",
        region: "Uuasima",
        lat: 60.1719,
        lon: 24.9347,
        uniqueVisitors: 1245
    },
    {
        city: "Tan-tan",
        country: "Morocco",
        region: "Guelmim-Oued Noun",
        lat: 28.43799,
        lon: -11.10321,
        uniqueVisitors: 458
    },

];

export const FavoritesMap: React.FC<FavoritesMapProps> = ({list}) => {
    // Default coordinates set to Oslo central station
    const position: LatLngExpression = [59.91174337077401, 10.750425582038146];
    const zoom: number = 2;

    return (
        <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{ height: '100vh', width: '80wh' }}>
            <TileLayer
                attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?api_key=75e43b4b-8587-4fee-8145-48ee75741c39"
            />
            {list.map((item, index) =>
                <Marker icon={icon} key={index} position={[item.lat, item.lon]} title={`${item.city} at ${item.country}`}>
                    <Popup>
                        <strong>{item.city} at {item.country}</strong><br />
                        <p>Total of visitors <strong>{item.uniqueVisitors}</strong> on this location.</p>
                        {item.description &&
                            <em>{item.description}</em>
                        }
                    </Popup>
                </Marker>
            )}
        </MapContainer>
    )
};