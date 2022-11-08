import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Map = () => {
    return (
        <MapContainer style={{ height: '100%', width: '100%' }} center={[-3.2822443398512418, -60.625509151898825]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution=''
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-3.2822443398512418, -60.625509151898825]}>
                <Popup>
                    São José(State of Amazonas).
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;