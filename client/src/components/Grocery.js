import React,{Component} from 'react';

import  GoogleMapReact from 'google-map-react';

import AddLocationIcon from '@mui/icons-material/AddLocation';

const MapCoordinates = ({  }) => {
    return(
     <AddLocationIcon color="secondary"/>
     
     
     )
    };


    
  function GroceryLocation(){
    const mapProps = {
      center: {
        lat: 40.0269483,
        lng: -75.1692777
      },
      zoom: 11
    };
  
     return (
      // Important! Always set the container height explicitly
      
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
/* Replace process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, WITH "ENTER_KEY_HERE" QUOTATIONS ARE MANDATORY NO COMMA AFTER  */
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, }}
          defaultCenter={mapProps.center}
          defaultZoom={mapProps.zoom}
        >
          <MapCoordinates
            lat={40.0269483}
            lng={-75.1692777}
            
            text="Aldi"
          />

<MapCoordinates
            lat={40.0766774}
            lng={-75.1914928}
            
            text="Whole Foods"
          />

<MapCoordinates
            lat={40.0501703}
            lng={-75.3252912}
            
            text="Grocery Outlet"
          />



<MapCoordinates
            lat={40.0359878}
            lng={-75.1413865}
            
            text="Shop Rite"
          />


<MapCoordinates
            lat={40.0359878}
            lng={-75.1413865}
            
            text="Save-A-Lot"
          />

<MapCoordinates
            lat={39.9919767}
            lng={-75.1620583}
            
            text="Cousin's SuperMarket"
          />

<MapCoordinates
            lat={39.984194}
            lng={-75.1951013}
            
            text="Cecil B SuperMarket"
          />

          
        
         
        </GoogleMapReact>
      </div>
  
    )}
  

  
  export default GroceryLocation;