import Map from "../components/Map";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import CardItem from "../components/CardItem";
import apiHandler from "../api/apiHandler";

import React, { Component } from "react";

export class Home extends Component {
  state = {
    plants: [],
    selectedPlant: null,
    showCard: false,
    user: {},
  };

  componentDidMount() {
    apiHandler
      .getItems()
      .then((data) => {
        console.log(data);
        this.setState({ plants: data });
        console.log(this.state.plants);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  showItem = (object) => {
    this.setState(
      {
        selectedPlant: object,
        showCard: true,
      },
      () => {
        console.log(this.state.selectedPlant);
      }
    );

    apiHandler
    .isLoggedIn()
      .then((data) => {
        console.log(data)
        this.setState({user:data})
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Map
          style="mapbox://styles/mapbox/streets-v8"
          containerStyle={{
            height: "100vh",
            width: "100vw",
          }}
          center={[2.3488, 48.8534]}
        >
          {/*  <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer> */}

          {this.state.plants.map((plant, index) => {
            const loc = plant.location.coordinates;
            if (loc.length > 0) {
              return (
                <Marker
                key={index}
                  onClick={() => this.showItem(plant)}
                  coordinates={[
                    plant.location.coordinates[0],
                    plant.location.coordinates[1],
                  ]}
                  anchor="bottom"
                >
                  <img src="/media/marker-purple.svg" alt="r" />
                </Marker>
              );
            }
          })}
        </Map>
        {this.state.showCard ? (
          <CardItem plant={this.state.selectedPlant} user={this.state.user} />
        ) : null}
      </div>
    );
  }
}

export default Home;
