import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Carousel} from "react-materialize"
import Pixupload from "../../components/Upload/Pixuploader"
import UploadModal from "../../components/UploadModal/UploadModal"
import API from '../../utils/API.js'
import TimelineImage from  '../../components/TimelineImage'
import Auth from '../../modules/Auth';
import NavLogin from '../../components/NavBar';

class Timeline extends Component {

  constructor() {
    super();

    this.state = {
      images: [],
      secretData: '' //Authentication
    }

  } // End of Constructor

  componentWillMount() {
    this.fetchCommunityImages();
  }

  /////////////////////////////////////////////// /* Authentication */ //////////////////////////////////////////////////////////
  componentDidMount() {
  const xhr = new XMLHttpRequest();
  xhr.open('get', '/api/timeline');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  // set the authorization HTTP header
  xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      this.setState({
        secretData: xhr.response.message
      });
    }
  });
  xhr.send();
}

/////////////////////////////////////////////// /* */ //////////////////////////////////////////////////////////

  fetchCommunityImages() { // Function to Fetch Community Images

    let fetchedimages = [];

    for (let key in API.imageData) { // Get Images from API Ajax Call and Store into Variable fetchedImages
      fetchedimages.push(API.imageData[key]);
    }
    console.log(fetchedimages)

    this.setState(prevState => ({
      images: [...prevState].concat(fetchedimages)
    }), () => console.log(this.state))
  }

  render() {
    return (

      <div>
      <NavLogin/>

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
            <div className="carousel" id="imageCarousel">

             { this.state.images.map((imageLink)  =>   <a className="carousel-item"><TimelineImage  image={imageLink} /></a>)}

          </div>
        </div>
        <br/><br/>
        <div className="section"></div>
      </div>

    </div>
    </div>
    );

  }
}

export default Timeline;
