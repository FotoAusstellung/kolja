import React, { Component } from "react";
import { Button, withStyles } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export class ArrowButton extends Component {
  constructor(props) {
    super(props);
    if (props.direction === 1) {
      this.glyph = <ArrowForwardIcon variant="contained" color="primary" />;
    } else if (props.direction === -1) {
      this.glyph = <ArrowBackIcon variant="contained" color="primary" />;
    }
  }

  render() {

    return (

        <Button onClick={this.props.clickfunction}>
          {this.glyph}
        </Button>

    );
  }
}