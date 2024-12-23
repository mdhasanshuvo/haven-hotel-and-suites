import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

const HotelMap = () => {
  const [position, setPosition] = useState([23.8103, 90.4125]); 

  return (
    <section className="py-16 lg:py-32 bg-gradient-to-r from-blue-500 to-indigo-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-6">Find Haven Hotel and Suites</h2>
        <p className="text-lg text-white mb-12">
          Nestled in the heart of Dhaka, Haven Hotel and Suites offers comfort, luxury, and a perfect getaway. Find us here.
        </p>
        <div className="relative w-full h-96 rounded-xl shadow-2xl overflow-hidden bg-white">
          <MapContainer
            center={position}
            zoom={14}
            style={{ width: '100%', height: '100%' }}
            scrollWheelZoom={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                <strong>Haven Hotel and Suites</strong><br />
                A luxurious hotel in the heart of Dhaka, Bangladesh.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default HotelMap;
