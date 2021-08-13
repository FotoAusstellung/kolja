import React, { Component, setState, useState } from "react";
import { ImageField } from "./ImageField";
import { ArrowButton } from "./ArrowButton";
import { Button, AppBar, Tabs, Tab } from "@material-ui/core";

export class Carousel extends Component {
  // group: 0=> neue Fotos, 1=> Fotos letzter ausstellung
  state = { Image: 1, Group: 0 };
  groupNames = ["neue Fotos", "Highlights der letzten Ausstellung"];
  constructor(props) {
    super(props);
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);

  }
  handleChange = (event, value) => {
    this.setState((prevState) => {
      prevState.Group = value;
      if (value === 1) {
        return { Image: 71, Group: 1 };
      }
      if (value === 0) {
        return { Image: 1, Group: 0 };
      }
      return prevState;
    });
  };
  render() {
    return (
      <div className="carousel">
        <Tabs
          value={this.state.Group}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="disabled tabs example"
        >
          <Tab label={this.groupNames[0]} />
          <Tab label={this.groupNames[1]} />
        </Tabs>

        <ImageField image={this.state.Image} />
        <ArrowButton direction={-1} clickfunction={this.previousImage} />
        <ArrowButton direction={1} clickfunction={this.nextImage} />
        <p>{this.state.Image}</p>
      </div>
    );
  }
  nextImage() {
    this.setState((prevState) => {
      return { Image: prevState.Image >= 88 ? 1 : prevState.Image + 1 };
    });
  }
  previousImage() {
    this.setState((prevState) => {
      return { Image: prevState.Image <= 1 ? 88 : prevState.Image - 1 };
    });
  }
}
