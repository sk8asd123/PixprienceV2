import React, {Component} from 'react';


export default class Imagecontainer extends Component {
  render() {
    return (
      <div className="tile-wide bg-orange fg-white" data-role="tile">
        <div className="tile-content">
          <div className="image-container">
            <div className="frame">
              <img src={this.props.image}/></div>
            <div className="image-overlay op-green">
              <h2>{this.props.title}</h2>
              <p>
                {this.props.text}
              </p>
            </div>
          </div>
          <div className="tile-label">{this.props.label}</div>
        </div>
      </div>
    );
  }
}

// <Imagecontainer title="Container" label="container" image = {this.state.images[5]}/>
