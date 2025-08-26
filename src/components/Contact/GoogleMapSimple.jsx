import React from 'react';
import '../../css/GoogleMapSimple.css';

const GoogleMapSimple = ({ 
  address = "1494 S Robertson Blvd #100, Los Angeles, CA 90035",
  width = "100%", 
  height = "400px",
  zoom = "14",
  showHeader = true,
  title = "Our Location"
}) => {
  const encodedAddress = encodeURIComponent(address);
  
  // This uses the basic Google Maps embed without requiring an API key
  const mapSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
  
  return (
    <div className="google-map-simple-container">
      {showHeader && (
        <div className="map-simple-header">
          <h3 className="map-simple-title">{title}</h3>
          <p className="map-simple-address">{address}</p>
        </div>
      )}
      
      <div className="map-simple-wrapper" style={{ width, height }}>
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps - Location"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMapSimple;