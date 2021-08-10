import React, { Component } from "react";

var images = require.context("../../public/images", true);

export class ImageField extends Component {
  render() {
    return (
      <div class="image">
        <img src={images(`./${this.props.image}.jpg`)} alt="" srcset="" />
      </div>
    );
  }
}
