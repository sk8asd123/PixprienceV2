import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Carousel} from "react-materialize"
import Pixupload from "../../components/Upload/Pixuploader"
import UploadModal from "../../components/UploadModal/UploadModal"

export default class Timeline extends Component {

  render() {
    return (

      <div>

      <nav className="teal accent-4" role="navigation">
        {/* <Pixupload /> */}
        <UploadModal />
        <div className="nav-wrapper container">
          <ul id="nav-mobile" className="side-nav">
            <li>
              <a href="#">#3651</a>
            </li>
          </ul>
          <a href="#" data-activates="nav-mobile" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <br/><br/>
          <h1 className="header center blue-grey-text">Welcome to your timeline</h1>
        </div>
      </div>
      <div className="container">
        <div className="section">
          {/* Icon Section */}
          <div className="row">
            <Carousel images={[
              'https://lorempixel.com/250/250/nature/1',
              'https://lorempixel.com/250/250/nature/2',
              'https://lorempixel.com/250/250/nature/3',
              'https://lorempixel.com/250/250/nature/4',
              'https://lorempixel.com/250/250/nature/5'
            ]} />
          </div>
        </div>
        <br/><br/>
        <div className="section"></div>
      </div>

    </div>);

  }
}
