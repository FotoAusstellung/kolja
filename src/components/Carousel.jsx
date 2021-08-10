import React, { Component, setState } from "react";
import { ImageField } from "./ImageField";
import { ArrowButton } from "./ArrowButton";
import { Button } from "@material-ui/core"

export class Carousel extends Component {
	// group: 0=> neue Fotos, 1=> Fotos letzter ausstellung
  state = { Image: 1, Group: 0 };
  groupLink = ["Highlights letzter Ausstellung", "neue Fotos"]
  constructor(props){
	  super(props);
	  this.nextImage = this.nextImage.bind(this);
	  this.previousImage = this.previousImage.bind(this);
	  this.changeGroup = this.changeGroup.bind(this);
  }
  render() {
    return (
      <div className="carousel" >
        <ImageField image={this.state.Image} />
        <ArrowButton direction={-1} clickfunction={this.previousImage} />
        <ArrowButton direction={1} clickfunction={this.nextImage} />
		<p>{this.state.Image}</p>

		<Button variant="contained" color="primary" size="small" onClick={this.changeGroup}>{this.groupLink[this.state.Group]}</Button>

      </div>
    );
  }
  nextImage() {
    this.setState(((prevState) => {

	if(this.state.Group === 0)
      return { Image: prevState.Image === 70 ? 1 : prevState.Image + 1 };
	else
	  return { Image: prevState.Image === 88 ? 71 : prevState.Image + 1 };
    }));
  }
  previousImage() {
    this.setState(((prevState) => {
	if(prevState.Group===0)
      return { Image: prevState.Image <= 1 ? 70 : prevState.Image - 1 };
	else
	  return { Image: prevState.Image <= 71 ? 88 : prevState.Image - 1 };
    }));
  }
  changeGroup(){
	this.setState((prevState)=>{

		if(prevState.Group === 0){
			return  {Image: 71, Group: 1}
		}
		if(prevState.Group === 1){
			return  {Image: 1, Group: 0}
		}

	})

  }
  
}
