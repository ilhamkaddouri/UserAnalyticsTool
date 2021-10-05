import React, {useState} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
interface RealTimeMapsProps {

}
const data = [
  {
    "Id": 1,
    "Location": "Maharashtra",
    "Total_Cases": "36,39,855",
    "New_Cases_Per_Day": "61,695",
    "Cases_Per_1_Million_People": "31,877",
    "Deaths": "59,153",
    "Latitude": 60.1719,
    "Longitude": 24.9347
  },
  {
    "Id": 2,
    "Location": "Kerala",
    "Total_Cases": "11,97,301",
    "New_Cases_Per_Day": "8,126",
    "Cases_Per_1_Million_People": "34,574",
    "Deaths": "4,856",
    "Latitude": 10.850516,
    "Longitude": 76.27108
  }
]

export const RealTimeMaps: React.FC<RealTimeMapsProps> = ({}) => {
    const [activeCovid, setActiveCovid] = useState({
        "Id": 2,
        "Location": "Kerala",
        "Total_Cases": "11,97,301",
        "New_Cases_Per_Day": "8,126",
        "Cases_Per_1_Million_People": "34,574",
        "Deaths": "4,856",
        "Latitude": 10.850516,
        "Longitude": 76.27108
      });
  return (
    <MapContainer center={[20.593683, 78.962883]} zoom={5}>
      {data.map((eachData) => (
        <Marker
          key={eachData.Id}
          position={[eachData.Latitude, eachData.Longitude]}
          eventHandlers={{
            click: () => {
              setActiveCovid(eachData);
            }
          }}
        />
      ))}
      {activeCovid && (
        <Popup
          position={[activeCovid.Latitude, activeCovid.Longitude]}
          onClose={() => {
            setActiveCovid({
                "Id": 2,
                "Location": "Kerala",
                "Total_Cases": "11,97,301",
                "New_Cases_Per_Day": "8,126",
                "Cases_Per_1_Million_People": "34,574",
                "Deaths": "4,856",
                "Latitude": 10.850516,
                "Longitude": 76.27108
              });
          }}
        >
          <div>
            <h1>{activeCovid.Location}</h1>
            <p>Total cases: {activeCovid.Total_Cases}</p>
            <p>New cases (1 day*): {activeCovid.New_Cases_Per_Day}</p>
            <p>
              Cases per 1 million people:{" "}
              {activeCovid.Cases_Per_1_Million_People}
            </p>
            <p>Deaths: {activeCovid.Deaths}</p>
          </div>
        </Popup>
      )}
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=75e43b4b-8587-4fee-8145-48ee75741c39"
      />
    </MapContainer>
  );
}