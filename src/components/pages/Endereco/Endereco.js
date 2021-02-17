import React, { useState } from 'react';
import './Endereco.css';
import osm from './osmProvides';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

function Endereco() {
  const [center, setCenter] = useState({
    lat: 51.505,
    lng: -0.09,
  });
  const ZOOM_LEVEL = 20;

  const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <>
      <section className='map-section'>
        <div className='map'>
          <MapContainer center={center} zoom={ZOOM_LEVEL}>
            <TileLayer
              url={osm.maptiler.url}
              attribution={osm.maptiler.attribution}
            ></TileLayer>
            <Marker position={center}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>
    </>
  );
}

export default Endereco;
