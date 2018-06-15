import {
    HelpBlock,
    FormGroup,
    FormControl,
    ControlLabel
  } from "react-bootstrap";
  import React from "react";
  
  export default ({id, label, ...props}) => {
      return (
          <FormGroup controlId={id}>
              <ControlLabel>{label}</ControlLabel>
              <FormControl {...props}/>
          </FormGroup>
      )
  }