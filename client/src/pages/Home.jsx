import React from "react";
import Map from "../components/Map";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Home = (props) => {
  // Implement react map box here.
  return (
    <div>
      <Map
        style="mapbox://styles/mapbox/streets-v8"
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Map>
      ;<p>On home /</p>
    </div>
  );
};

export default Home;
