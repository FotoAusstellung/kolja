import React, { Component } from "react";

var images = require.context("../../public/images", true);

export class ImageField extends Component {
  render() {
    return (
      <div className="image">
        <img src={images(`./${this.props.image}.jpg`)} alt="" srcset="" />
      </div>
    );
  }
}
