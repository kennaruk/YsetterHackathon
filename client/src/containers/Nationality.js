/*global google*/
import React, { Component } from "react";
import "./Nationality.css";
import imgproject from "../img/imgproject.png";
import BodyClassName from "react-body-classname";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap
} from "react-google-maps";
import { compose, withProps } from "recompose";
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";

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
    <HeatmapLayer radius={20} data={props.data||getPoints()} />
  </GoogleMap>
));

function getPoints() {
  return [
        new google.maps.LatLng(14.644, 104.234),
        new google.maps.LatLng(14.644, 104.234),
        new google.maps.LatLng(14.644, 104.234),
        new google.maps.LatLng(14.644, 104.234),
        new google.maps.LatLng(14.644, 104.234),
        new google.maps.LatLng(7.277, 100.441),
        new google.maps.LatLng(7.277, 100.441),
        new google.maps.LatLng(7.277, 100.441),
        new google.maps.LatLng(7.277, 100.441),
        new google.maps.LatLng(7.277, 100.441),
        new google.maps.LatLng(7.277, 100.441),
        new google.maps.LatLng(13.465, 99.787),
        new google.maps.LatLng(13.465, 99.787),
        new google.maps.LatLng(13.465, 99.787),
        new google.maps.LatLng(13.465, 99.787),
        new google.maps.LatLng(13.465, 99.787),
        new google.maps.LatLng(13.465, 99.787),
        new google.maps.LatLng(13.465, 99.787),
        new google.maps.LatLng(18.808, 99.072),
        new google.maps.LatLng(18.808, 99.072),
        new google.maps.LatLng(18.808, 99.072),
        new google.maps.LatLng(18.808, 99.072),
        new google.maps.LatLng(18.808, 99.072),
        new google.maps.LatLng(18.808, 99.072),
        new google.maps.LatLng(18.808, 99.072),
        new google.maps.LatLng(18.808, 99.072),
        new google.maps.LatLng(18.808, 99.072),
        new google.maps.LatLng(13.112, 99.821),
        new google.maps.LatLng(13.112, 99.821),
        new google.maps.LatLng(13.112, 99.821),
        new google.maps.LatLng(13.112, 99.821),
        new google.maps.LatLng(13.112, 99.821),
        new google.maps.LatLng(13.112, 99.821),
        new google.maps.LatLng(13.112, 99.821),
        new google.maps.LatLng(13.112, 99.821),
        new google.maps.LatLng(13.112, 99.821),
        new google.maps.LatLng(13.112, 99.821),
        new google.maps.LatLng(14.229, 100.758),
        new google.maps.LatLng(14.229, 100.758),
        new google.maps.LatLng(14.229, 100.758),
        new google.maps.LatLng(14.229, 100.758),
        new google.maps.LatLng(14.229, 100.758),
        new google.maps.LatLng(14.229, 100.758),
        new google.maps.LatLng(14.229, 100.758),
        new google.maps.LatLng(14.229, 100.758),
        new google.maps.LatLng(14.229, 100.758),
        new google.maps.LatLng(14.229, 100.758),
        new google.maps.LatLng(15.136, 103.565),
        new google.maps.LatLng(15.136, 103.565),
        new google.maps.LatLng(15.136, 103.565),
        new google.maps.LatLng(15.136, 103.565),
        new google.maps.LatLng(15.136, 103.565),
        new google.maps.LatLng(15.136, 103.565),
        new google.maps.LatLng(15.136, 103.565),
        new google.maps.LatLng(15.136, 103.565),
        new google.maps.LatLng(15.136, 103.565),
        new google.maps.LatLng(15.136, 103.565),
        new google.maps.LatLng(15.136, 103.565),
        new google.maps.LatLng(15.136, 103.565),

        

        ];
}

class Nationality extends Component {
  state = {
    data: null,
    value: null
  };

  componentDidMount() {
    
  }

  handleChange = (event) => {
      
    if (event.target.value == "ลาว") {
        console.log(event.target.value)
        this.setState({
          'data': [
            new google.maps.LatLng(6.546, 99.706),
            new google.maps.LatLng(6.546, 99.706),
            new google.maps.LatLng(6.546, 99.706),
            new google.maps.LatLng(6.546, 99.706),
            new google.maps.LatLng(6.546, 99.706),
            new google.maps.LatLng(6.546, 99.706),
            new google.maps.LatLng(6.546, 99.706),
            new google.maps.LatLng(12.646, 101.171),
            new google.maps.LatLng(12.646, 101.171),
            new google.maps.LatLng(12.646, 101.171),
            new google.maps.LatLng(12.646, 101.171),
            new google.maps.LatLng(12.646, 101.171),
            new google.maps.LatLng(12.646, 101.171),
            new google.maps.LatLng(14.341, 100.581),
            new google.maps.LatLng(14.341, 100.581),
            new google.maps.LatLng(14.341, 100.581),
            new google.maps.LatLng(14.341, 100.581),
            new google.maps.LatLng(14.341, 100.581),
            new google.maps.LatLng(14.341, 100.581),
            new google.maps.LatLng(14.341, 100.581),
            new google.maps.LatLng(14.341, 100.581),
            new google.maps.LatLng(14.341, 100.581),
            new google.maps.LatLng(14.341, 100.581),
            new google.maps.LatLng(13.778, 100.505),
            new google.maps.LatLng(13.778, 100.505),
            new google.maps.LatLng(13.778, 100.505),
            new google.maps.LatLng(13.744, 100.52),
            new google.maps.LatLng(13.744, 100.52),
            new google.maps.LatLng(13.744, 100.52),
            new google.maps.LatLng(13.744, 100.52),
            new google.maps.LatLng(13.744, 100.52),
            new google.maps.LatLng(6.87, 101.256),
            new google.maps.LatLng(6.87, 101.256),
            new google.maps.LatLng(6.87, 101.256),
            new google.maps.LatLng(6.87, 101.256),
            new google.maps.LatLng(6.87, 101.256),
            new google.maps.LatLng(6.87, 101.256),
            new google.maps.LatLng(18.785, 98.985),
            new google.maps.LatLng(18.785, 98.985),
            new google.maps.LatLng(18.785, 98.985),
            new google.maps.LatLng(18.785, 98.985),
            new google.maps.LatLng(18.785, 98.985),
            new google.maps.LatLng(18.785, 98.985),
            new google.maps.LatLng(7.941, 99.072),
            new google.maps.LatLng(7.941, 99.072),
            new google.maps.LatLng(7.941, 99.072),
            new google.maps.LatLng(7.941, 99.072),
            new google.maps.LatLng(7.941, 99.072),
            new google.maps.LatLng(15.263, 100.041),
            new google.maps.LatLng(15.263, 100.041),
            new google.maps.LatLng(15.263, 100.041),
            new google.maps.LatLng(15.263, 100.041),
            new google.maps.LatLng(15.263, 100.041),
            new google.maps.LatLng(15.263, 100.041),
            new google.maps.LatLng(15.263, 100.041),
            new google.maps.LatLng(13.914, 100.422),
            new google.maps.LatLng(13.914, 100.422),
            new google.maps.LatLng(13.914, 100.422),
            new google.maps.LatLng(13.914, 100.422),
            new google.maps.LatLng(13.914, 100.422),
            new google.maps.LatLng(13.914, 100.422),
            new google.maps.LatLng(8.486, 97.634),
            new google.maps.LatLng(8.486, 97.634),
            new google.maps.LatLng(8.486, 97.634),
            new google.maps.LatLng(8.486, 97.634),
            new google.maps.LatLng(8.486, 97.634),
            new google.maps.LatLng(8.486, 97.634),
            new google.maps.LatLng(8.486, 97.634),
            new google.maps.LatLng(8.486, 97.634),
            new google.maps.LatLng(8.486, 97.634)
          ]}
        );
      }
      else if(event.target.value == "พม่า"){
        console.log(event.target.value)
          this.setState({'data':[new google.maps.LatLng(18.626, 98.854),
          new google.maps.LatLng(18.626, 98.854),
          new google.maps.LatLng(18.626, 98.854),
          new google.maps.LatLng(18.626, 98.854),
          new google.maps.LatLng(18.626, 98.854),
          new google.maps.LatLng(18.626, 98.854),
          new google.maps.LatLng(13.779, 100.609),
          new google.maps.LatLng(13.779, 100.609),
          new google.maps.LatLng(13.779, 100.609),
          new google.maps.LatLng(13.779, 100.609),
          new google.maps.LatLng(13.779, 100.609),
          new google.maps.LatLng(14.922, 101.903),
          new google.maps.LatLng(14.922, 101.903),
          new google.maps.LatLng(14.922, 101.903),
          new google.maps.LatLng(14.922, 101.903),
          new google.maps.LatLng(14.922, 101.903),
          new google.maps.LatLng(14.562, 100.333),
          new google.maps.LatLng(14.562, 100.333),
          new google.maps.LatLng(14.562, 100.333),
          new google.maps.LatLng(14.562, 100.333),
          new google.maps.LatLng(14.562, 100.333),
          new google.maps.LatLng(14.562, 100.333),
          new google.maps.LatLng(13.438, 99.801),
          new google.maps.LatLng(13.438, 99.801),
          new google.maps.LatLng(13.438, 99.801),
          new google.maps.LatLng(13.438, 99.801),
          new google.maps.LatLng(13.738, 99.809),
          new google.maps.LatLng(13.738, 99.809),
          new google.maps.LatLng(13.738, 99.809),
          new google.maps.LatLng(13.738, 99.809),
          new google.maps.LatLng(13.738, 99.809),
          new google.maps.LatLng(14.976, 100.361),
          new google.maps.LatLng(14.976, 100.361),
          new google.maps.LatLng(14.976, 100.361),
          new google.maps.LatLng(14.976, 100.361),
          new google.maps.LatLng(14.976, 100.361),
          new google.maps.LatLng(14.976, 100.361),
          new google.maps.LatLng(7.624, 100.039),
          new google.maps.LatLng(7.624, 100.039),
          new google.maps.LatLng(7.624, 100.039),
          new google.maps.LatLng(7.624, 100.039),
          new google.maps.LatLng(7.624, 100.039),
          new google.maps.LatLng(7.624, 100.039),
          new google.maps.LatLng(14.326, 100.834),
          new google.maps.LatLng(14.326, 100.834),
          new google.maps.LatLng(14.326, 100.834),
          new google.maps.LatLng(14.326, 100.834),
          new google.maps.LatLng(14.326, 100.834),
          new google.maps.LatLng(14.326, 100.834),
          new google.maps.LatLng(14.26, 100.114),
          new google.maps.LatLng(14.26, 100.114),
          new google.maps.LatLng(14.26, 100.114),
          new google.maps.LatLng(14.26, 100.114),
          new google.maps.LatLng(14.26, 100.114),
          new google.maps.LatLng(14.26, 100.114),
          new google.maps.LatLng(14.26, 100.114),
          new google.maps.LatLng(14.26, 100.114),]})
      }else if(event.target.value == "กัมพูชา"){
          this.setState({data:[
            new google.maps.LatLng(14.419, 100.318),
            new google.maps.LatLng(14.419, 100.318),
            new google.maps.LatLng(14.419, 100.318),
            new google.maps.LatLng(14.419, 100.318),
            new google.maps.LatLng(14.419, 100.318),
            new google.maps.LatLng(14.731, 100.398),
            new google.maps.LatLng(14.731, 100.398),
            new google.maps.LatLng(14.731, 100.398),
            new google.maps.LatLng(14.731, 100.398),
            new google.maps.LatLng(14.731, 100.398),
            new google.maps.LatLng(14.731, 100.398),
            new google.maps.LatLng(15.633,100.132),
            new google.maps.LatLng(16.715,104.115),
            new google.maps.LatLng(16.715,104.115),
            new google.maps.LatLng(16.715,104.115),
            new google.maps.LatLng(15.633,100.132),
            new google.maps.LatLng(15.633,100.132),
            new google.maps.LatLng(15.633,100.132),
            new google.maps.LatLng(16.715,104.115),
            new google.maps.LatLng(16.715,104.115),
            new google.maps.LatLng(16.715,104.115),
            new google.maps.LatLng(16.715,104.115),
            new google.maps.LatLng(18.665,98.871),
            new google.maps.LatLng(18.665,98.871),
            new google.maps.LatLng(18.665,98.871),
            new google.maps.LatLng(18.665,98.871),
            new google.maps.LatLng(18.665,98.871),
            new google.maps.LatLng(18.665,98.871),
            new google.maps.LatLng(14.018,100.731),
            new google.maps.LatLng(14.018,100.731),
            new google.maps.LatLng(14.018,100.731),
            new google.maps.LatLng(14.018,100.731),
            new google.maps.LatLng(14.018,100.731),
            new google.maps.LatLng(13.624,100.935),
            new google.maps.LatLng(13.624,100.935),
            new google.maps.LatLng(13.624,100.935),
            new google.maps.LatLng(13.624,100.935),
            new google.maps.LatLng(13.624,100.935),
            new google.maps.LatLng(13.624,100.935),
            new google.maps.LatLng(13.624,100.935),
            new google.maps.LatLng(13.624,100.935),
            new google.maps.LatLng(13.624,100.935),
            new google.maps.LatLng(7.559,99.616),
            new google.maps.LatLng(7.559,99.616),
            new google.maps.LatLng(7.559,99.616),
            new google.maps.LatLng(7.559,99.616),
            new google.maps.LatLng(7.559,99.616),
            new google.maps.LatLng(7.559,99.616),
            new google.maps.LatLng(7.559,99.616),
            new google.maps.LatLng(7.559,99.616),
            new google.maps.LatLng(14.985,102.687),
            new google.maps.LatLng(14.985,102.687),
            new google.maps.LatLng(14.985,102.687),
            new google.maps.LatLng(14.985,102.687),
            new google.maps.LatLng(14.985,102.687),
            new google.maps.LatLng(14.985,102.687),
            new google.maps.LatLng(14.985,102.687),
            new google.maps.LatLng(14.985,102.687),
            new google.maps.LatLng(14.985,102.687),
            new google.maps.LatLng(14.985,102.687),
            new google.maps.LatLng(13.673,101.201),
            new google.maps.LatLng(13.673,101.201),
            new google.maps.LatLng(13.673,101.201),
            new google.maps.LatLng(13.673,101.201),
            new google.maps.LatLng(13.673,101.201),
            new google.maps.LatLng(13.673,101.201),
            new google.maps.LatLng(13.673,101.201),
            new google.maps.LatLng(13.673,101.201),
            new google.maps.LatLng(13.673,101.201),
  
            ]})
      }else if(event.target.value == "ไทย"){
        this.setState({data:[
          new google.maps.LatLng(14.644, 104.234),
          new google.maps.LatLng(14.644, 104.234),
          new google.maps.LatLng(14.644, 104.234),
          new google.maps.LatLng(14.644, 104.234),
          new google.maps.LatLng(14.644, 104.234),
          new google.maps.LatLng(7.277, 100.441),
          new google.maps.LatLng(7.277, 100.441),
          new google.maps.LatLng(7.277, 100.441),
          new google.maps.LatLng(7.277, 100.441),
          new google.maps.LatLng(7.277, 100.441),
          new google.maps.LatLng(7.277, 100.441),
          new google.maps.LatLng(13.465, 99.787),
          new google.maps.LatLng(13.465, 99.787),
          new google.maps.LatLng(13.465, 99.787),
          new google.maps.LatLng(13.465, 99.787),
          new google.maps.LatLng(13.465, 99.787),
          new google.maps.LatLng(13.465, 99.787),
          new google.maps.LatLng(13.465, 99.787),
          new google.maps.LatLng(18.808, 99.072),
          new google.maps.LatLng(18.808, 99.072),
          new google.maps.LatLng(18.808, 99.072),
          new google.maps.LatLng(18.808, 99.072),
          new google.maps.LatLng(18.808, 99.072),
          new google.maps.LatLng(18.808, 99.072),
          new google.maps.LatLng(18.808, 99.072),
          new google.maps.LatLng(18.808, 99.072),
          new google.maps.LatLng(18.808, 99.072),
          new google.maps.LatLng(13.112, 99.821),
          new google.maps.LatLng(13.112, 99.821),
          new google.maps.LatLng(13.112, 99.821),
          new google.maps.LatLng(13.112, 99.821),
          new google.maps.LatLng(13.112, 99.821),
          new google.maps.LatLng(13.112, 99.821),
          new google.maps.LatLng(13.112, 99.821),
          new google.maps.LatLng(13.112, 99.821),
          new google.maps.LatLng(13.112, 99.821),
          new google.maps.LatLng(13.112, 99.821),
          new google.maps.LatLng(14.229, 100.758),
          new google.maps.LatLng(14.229, 100.758),
          new google.maps.LatLng(14.229, 100.758),
          new google.maps.LatLng(14.229, 100.758),
          new google.maps.LatLng(14.229, 100.758),
          new google.maps.LatLng(14.229, 100.758),
          new google.maps.LatLng(14.229, 100.758),
          new google.maps.LatLng(14.229, 100.758),
          new google.maps.LatLng(14.229, 100.758),
          new google.maps.LatLng(14.229, 100.758),
          new google.maps.LatLng(15.136, 103.565),
          new google.maps.LatLng(15.136, 103.565),
          new google.maps.LatLng(15.136, 103.565),
          new google.maps.LatLng(15.136, 103.565),
          new google.maps.LatLng(15.136, 103.565),
          new google.maps.LatLng(15.136, 103.565),
          new google.maps.LatLng(15.136, 103.565),
          new google.maps.LatLng(15.136, 103.565),
          new google.maps.LatLng(15.136, 103.565),
          new google.maps.LatLng(15.136, 103.565),
          new google.maps.LatLng(15.136, 103.565),
          new google.maps.LatLng(15.136, 103.565),

          

          ]})
    }
  };

  render() {
    return (
      <BodyClassName className="home-body">
        <div>
          <div className="text-name-project">
            สัญชาติของแรงงานในแต่ละพื้นที่
          </div>
          <select onChange={this.handleChange} className="select-nation">
            <option>ไทย</option>
            <option>ลาว</option>
            <option>พม่า</option>
            <option>กัมพูชา</option>
          </select>
          <MyMapComponent data={this.state.data} />
        </div>
      </BodyClassName>
    );
  }
}
export default Nationality;
