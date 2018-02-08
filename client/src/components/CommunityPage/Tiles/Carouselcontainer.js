import React, {Component} from 'react';

export default class Carouselcontainer extends Component {
  render() {
    return (<div className=" metro tile-wide bg-orange fg-white" data-role="tile">
      <div className=" metro widget tile-content">
        <Slider style={{height: "inherit"}}>
          <Slide src={this.props.image} title="This is our big Tagline!">
            Here's our small slogan.
          </Slide>
          <Slide src={this.props.image1} title="Left aligned Caption" placement="left" style={{
              height: "inherit"
            }}>
            Here's our small slogan.
          </Slide>
          <Slide src={this.props.image2} title="Right aligned Caption" placement="right">
            Here's our small slogan.
          </Slide>
        </Slider>
        <div className="tile-label">{this.props.label}</div>
      </div>
    </div>);
  }
}

// <Carouselcontainer image={this.state.images[0]} image1={this.state.images[1]} image2={this.state.images[2]} image3={this.state.images[3]} label="Carousel" />
