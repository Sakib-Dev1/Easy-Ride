import React from 'react'
import GoogleMapReact from 'google-map-react'

const GoogleMap = () => {
  const mapValue = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  }
  return (
    <div>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA5YjggofvCXW3-2aHqTOtOdpQDiR4HMvA' }}
          defaultCenter={mapValue.center}
          defaultZoom={mapValue.zoom}
        ></GoogleMapReact>
      </div>
    </div>
  )
}

export default GoogleMap
