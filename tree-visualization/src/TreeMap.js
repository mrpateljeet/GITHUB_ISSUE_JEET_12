import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { treeData } from './treeData';

function TreeMap() {
  return (
    <MapContainer center={[45.0, -93.0]} zoom={10} style={{ height: "500px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {treeData.map(tree => (
        <Marker key={tree.id} position={[tree.latitude, tree.longitude]}>
          <Popup>
            Diameter: {tree.diameter} cm <br />
            Height: {tree.height} m
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default TreeMap;
