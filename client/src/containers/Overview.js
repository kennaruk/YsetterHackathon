/*global google*/
import React, { Component } from "react";
import "./Overview.css";
import imgproject from "../img/imgproject.png";
import BodyClassName from "react-body-classname";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { compose, withProps } from "recompose";


function showInfo() {
  console.log("press");
  return (
    <InfoWindow>
      <h1>test</h1>
    </InfoWindow>
  );
}

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places,visualization",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={5} defaultCenter={{ lat: 15.87, lng: 100.9925 }}>
    <Marker
      position={{ lat: 15.136, lng: 103.565 }}
      icon="http://maps.google.com/mapfiles/ms/icons/green-dot.png"
      clickable="true"
      onClick={showInfo}
    >
    
      <InfoWindow>
        <h1>test</h1>
      </InfoWindow>
    </Marker>
    <Marker
      position={{ lat: 13.112, lng: 99.821 }}
      icon="http://maps.google.com/mapfiles/ms/icons/red-dot.png"
      clickable="true"
      onClick={showInfo}
    />
    <Marker
      position={{ lat: 18.808, lng: 99.072 }}
      clickable="true"
      icon="http://maps.google.com/mapfiles/ms/icons/red-dot.png"
      onClick={showInfo}
      >
      <InfoWindow>
        <h1>test</h1>
      </InfoWindow>
    </Marker>
    <Marker
      position={{ lat: 14.644, lng: 104.234 }}
      clickable="true"
      icon="http://maps.google.com/mapfiles/ms/icons/red-dot.png"
      onClick={showInfo}
      >
      <InfoWindow>
        <h1>test</h1>
      </InfoWindow>
    </Marker>
    <Marker
      position={{ lat: 13.673, lng: 101.201 }}
      clickable="true"
      icon="http://maps.google.com/mapfiles/ms/icons/red-dot.png"
      onClick={showInfo}
      >
      <InfoWindow>
        <h1>test</h1>
      </InfoWindow>
    </Marker>
    <Marker
      position={{ lat: 7.559, lng: 99.616 }}
      clickable="true"
      icon="http://maps.google.com/mapfiles/ms/icons/green-dot.png"
      onClick={showInfo}
      >
      <InfoWindow>
        <h1>test</h1>
      </InfoWindow>
    </Marker>
    <Marker
      position={{ lat: 13.624, lng: 100.935 }}
      clickable="true"
      icon="http://maps.google.com/mapfiles/ms/icons/green-dot.png"
      onClick={showInfo}
      >
      <InfoWindow>
        <h1>test</h1>
      </InfoWindow>
    </Marker>
    <Marker
      position={{ lat: 18.665, lng: 98.871 }}
      clickable="true"
      icon="http://maps.google.com/mapfiles/ms/icons/green-dot.png"
      onClick={showInfo}
      >
      <InfoWindow>
        <h1>test</h1>
      </InfoWindow>
    </Marker>
    <Marker
      position={{ lat: 15.633, lng: 100.132 }}
      clickable="true"
      icon="http://maps.google.com/mapfiles/ms/icons/red-dot.png"
      onClick={showInfo}
      >
      <InfoWindow>
        <h1>test</h1>
      </InfoWindow>
    </Marker>
    <Marker
      position={{ lat: 14.731, lng: 100.114 }}
      clickable="true"
      icon="http://maps.google.com/mapfiles/ms/icons/red-dot.png"
      onClick={showInfo}
      >
      <InfoWindow>
        <h1>test</h1>
      </InfoWindow>
    </Marker>
    <Marker
      position={{ lat: 14.26, lng: 100.114 }}
      clickable="true"
      icon="http://maps.google.com/mapfiles/ms/icons/red-dot.png"
      onClick={showInfo}
      >
      <InfoWindow>
        <h1>test</h1>
      </InfoWindow>
    </Marker>
  </GoogleMap>
));
class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  handleToggleOpen = () => {
    this.setState({
      isOpen: true
    });
  };

  handleToggleClose = () => {
    this.setState({
      isOpen: false
    });
  };
  render() {
    return (
      <BodyClassName className="home-body">
        <div>
          <div className="text-name-project">   สถานะการส่งทะเบียนแต่ละโครงการ</div>

          <div className="detail-box">
           
            {/* <div className="detail-head-text">
           
            </div> */}
            <div className="graph-box3">
              <MyMapComponent />
            </div>
          </div>
        </div>
      </BodyClassName>
    );
  }
}
export default Overview;
