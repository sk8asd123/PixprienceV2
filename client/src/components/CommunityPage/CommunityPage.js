/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////
import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

/////////////////////////////////////////////// /* Components */ //////////////////////////////////////////////////
import API from '../../utils/API.js'
import Nav from "../NavBar";

/////////////////////////////////////////////// /* CSS */ //////////////////////////////////////////////////
// Metro UI CSS
import '../../.././node_modules/metro-dist/css/metro.css';
import '../../.././node_modules/metro-dist/css/metro-colors.css';
import '../../.././node_modules/metro-dist/css/metro-icons.css';
import '../../.././node_modules/metro-dist/css/metro-responsive.css';
import '../../.././node_modules/metro-dist/css/metro-rtl.css';
import '../../.././node_modules/metro-dist/css/metro-schemes.css';

/////////////////////////////////////////////// /* Main */ //////////////////////////////////////////////////

export default class CommunityPage extends Component {

  constructor() {
    super();

    this.state = {
      images: []
    }

  } // End of Constructor

  componentWillMount() {
    this.fetchCommunityImages();
  }

  fetchCommunityImages() { // Function to Fetch Community Images

    let fetchedimages = [];

    for (let key in API.imageData) { // Get Images from API Ajax Call and Store into Variable fetchedImages
      fetchedimages.push(API.imageData[key]);
    }

    this.setState(prevState => ({
      images: [...prevState].concat(fetchedimages)
    }), () => console.log(this.state))
  }

  render() {

    return (<Fragment>
    <Nav/>
      <div className="metro container content">
        <div className="tile-container bg-darkCobalt">
          <div className="tile bg-red fg-white" data-role="tile">
            <div className="tile-content iconic">
              <span className="icon mif-cogs"/>
            </div>
          </div>
          <div className="tile bg-cyan fg-white" data-role="tile">
            <div className="tile-content iconic">
              <span className="icon mif-envelop"/>
              <span className="tile-badge bg-darkRed">5</span>
              <span className="tile-label">Mail</span>
            </div>
          </div>
          <div className="tile-wide bg-orange fg-white" data-role="tile">
            <div className="tile-content iconic">
              <span className="icon mif-cloud"/>
              <span className="tile-label">Cloud service</span>
            </div>
          </div>
          <div className="tile-wide bg-orange fg-white" data-role="tile">
            <div className="tile-content image-set">
              <img src={this.state.images[0]}/>
              <img src={this.state.images[1]}/>
              <img src={this.state.images[2]}/>
              <img src={this.state.images[3]}/>
              <img src={this.state.images[4]}/>
            </div>
            <span className="tile-label">image-set</span>
          </div>
          <div className="tile-wide bg-orange fg-white" data-role="tile">
            <div className="tile-content">
              <div className="image-container">
                <div className="frame">
                  <img src={this.state.images[5]}/></div>
                <div className="image-overlay op-green">
                  <h2>Image title</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="tile-label">Image container</div>
            </div>
          </div>
          <div className="tile bg-transparent fg-white text-shadow" data-role="tile">
            <div className="tile-content">
              <div className="tile-label">fitImage</div>
              <div className="image-container image-format-square" style={{
                  width: '100%'
                }}>
                <div className="frame">
                  <div style={{
                      width: '100%',
                      height: 150,
                      backgroundImage: 'url(' + this.state.images[22] + ')',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      borderRadius: 0
                    }}/>
                </div>
              </div>
            </div>
          </div>
          <div className=" metro tile-wide bg-orange fg-white" data-role="tile">
            <div className=" metro widget tile-content">
              <div className="slider" style={{height: "inherit"}}>
                  <ul className="slides" style={{height: "inherit"}}>
                    <li>
                      <img src="https://lorempixel.com/580/250/nature/1" /> {/* random image */}
                      <div className="caption center-align">
                        <h6>This is our big Tagline!</h6>
                        <h6 className="light grey-text text-lighten-3">Here's our small slogan.</h6>
                      </div>
                    </li>
                    <li>
                      <img src="https://lorempixel.com/580/250/nature/2" /> {/* random image */}
                      <div className="caption left-align">
                        <h6>Left Aligned Caption</h6>
                        <h6 className="light grey-text text-lighten-3">Here's our small slogan.</h6>
                      </div>
                    </li>
                    <li>
                      <img src="https://lorempixel.com/580/250/nature/3" /> {/* random image */}
                      <div className="caption right-align">
                        <h6>Right Aligned Caption</h6>
                        <h6 className="light grey-text text-lighten-3">Here's our small slogan.</h6>
                      </div>
                    </li>
                    <li>
                      <img src="https://lorempixel.com/580/250/nature/4" /> {/* random image */}
                      <div className="caption center-align">
                        <h6>This is our big Tagline!</h6>
                        <h6 className="light grey-text text-lighten-3">Here's our small slogan.</h6>
                      </div>
                    </li>
                  </ul>
                </div>
              <div className="tile-label">Carousel</div>
            </div>
          </div>
          <div className="tile bg-green fg-white element-selected" data-role="tile">
            <div className="tile-content iconic">
              <span className="icon mif-home"/>
              <div className="tile-label">selected</div>
            </div>
          </div>
          <div className="tile fg-white" data-role="tile">
            <div className="tile-content slide-up">
              <div className="slide">
                <div className="image-container image-format-square" style={{
                    width: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: 150,
                        backgroundImage: 'url(' + this.state.images[2] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="slide-over op-cyan text-small padding10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="tile-label">slide-up</div>
            </div>
          </div>
          <div className="tile-wide fg-white" data-role="tile">
            <div className="tile-content slide-up">
              <div className="slide">
                <div className="image-container image-format-hd" style={{
                    width: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '174.375px',
                        backgroundImage: 'url(' + this.state.images[3] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="slide-over op-orange text-small padding10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="tile-label">slide-up</div>
            </div>
          </div>
          <div className="tile-wide fg-white" data-role="tile">
            <div className="tile-content slide-up-2">
              <div className="slide">
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[4] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="slide-over bg-orange text-small padding10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="tile-label">slide-up-2</div>
            </div>
          </div>
          <div className="tile fg-white" data-role="tile">
            <div className="tile-content slide-down">
              <div className="slide">
                <div className="image-container image-format-square" style={{
                    width: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: 150,
                        backgroundImage: 'url(' + this.state.images[5] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="slide-over op-cyan text-small padding10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="tile-label">slide-down</div>
            </div>
          </div>
          <div className="tile-wide fg-white" data-role="tile">
            <div className="tile-content slide-down">
              <div className="slide">
                <div className="image-container image-format-hd" style={{
                    width: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '174.375px',
                        backgroundImage: 'url(' + this.state.images[6] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="slide-over op-green text-small padding10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="tile-label">slide-down</div>
            </div>
          </div>
          <div className="tile-wide fg-white" data-role="tile">
            <div className="tile-content slide-down-2">
              <div className="slide">
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[7] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="slide-over bg-green text-small padding10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="tile-label">slide-down-2</div>
            </div>
          </div>
          <div className="tile fg-white bg-transparent " data-role="tile">
            <div className="tile-content slide-down-2 ">
              <div className="slide">
                <div className="image-container image-format-square" style={{
                    width: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: 150,
                        backgroundImage: 'url(' + this.state.images[8] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="slide-over bg-green text-small padding10 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="tile-label">slide-down-2</div>
            </div>
          </div>
          <div className="tile fg-white" data-role="tile">
            <div className="tile-content slide-left">
              <div className="slide">
                <div className="image-container image-format-square" style={{
                    width: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: 150,
                        backgroundImage: 'url(' + this.state.images[9] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="slide-over op-cyan text-small padding10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="tile-label">slide-left</div>
            </div>
          </div>
          <div className="tile-wide fg-white" data-role="tile">
            <div className="tile-content slide-left">
              <div className="slide">
                <div className="image-container image-format-hd" style={{
                    width: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '174.375px',
                        backgroundImage: 'url(' + this.state.images[10] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="slide-over op-green text-small padding10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="tile-label">slide-left</div>
            </div>
          </div>
          <div className="tile fg-white" data-role="tile">
            <div className="tile-content slide-left-2">
              <div className="slide">
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[11] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="slide-over op-green text-small padding10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="tile-label">slide-left-2</div>
            </div>
          </div>
          <div className="tile fg-white" data-role="tile">
            <div className="tile-content slide-right">
              <div className="slide">
                <div className="image-container image-format-square" style={{
                    width: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: 150,
                        backgroundImage: 'url(' + this.state.images[12] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="slide-over op-cyan text-small padding10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="tile-label">slide-right</div>
            </div>
          </div>
          <div className="tile-wide fg-white" data-role="tile">
            <div className="tile-content slide-right">
              <div className="slide">
                <div className="image-container image-format-hd" style={{
                    width: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '174.375px',
                        backgroundImage: 'url(' + this.state.images[13] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="slide-over op-green text-small padding10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="tile-label">slide-right</div>
            </div>
          </div>
          <div className="tile-wide fg-white" data-role="tile">
            <div className="tile-content slide-right-2">
              <div className="slide">
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[14] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="slide-over op-green text-small padding10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="tile-label">slide-right-2</div>
            </div>
          </div>
          <div className="tile-wide fg-white" data-role="tile">
            <div className="tile-content zooming">
              <div className="slide">
                <img src={this.state.images[11]}/></div>
              <div className="tile-label">Zooming</div>
            </div>
          </div>
          <div className="tile-wide fg-white" data-role="tile">
            <div className="tile-content zooming-out">
              <div className="slide">
                <img src={this.state.images[12]}/></div>
              <div className="tile-label">Zooming out</div>
            </div>
          </div>
          <div className="tile fg-white" data-role="tile" data-effect="slideLeft">
            <div className="tile-content">
              <div className="live-slide" style={{
                  left: '14.1461px'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[15] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  left: '-150px',
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[16] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  left: '-150px',
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[17] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  left: '-150px',
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[18] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  left: '-135.854px',
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[19] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="tile-label">effect: slideLeft</div>
          </div>
          <div className="tile fg-white" data-role="tile" data-effect="slideRight">
            <div className="tile-content">
              <div className="live-slide" style={{
                  left: '-14.6537px'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[20] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  left: 150,
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[21] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  left: 150,
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[22] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  left: 150,
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[23] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  left: '135.346px',
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[24] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="tile-label">effect: slideRight</div>
          </div>
          <div className="tile fg-white" data-role="tile" data-effect="slideLeftRight">
            <div className="tile-content">
              <div className="live-slide" style={{
                  left: '15.3149px'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[25] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  left: '-150px',
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[26] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  left: 150,
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[27] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  left: '-150px',
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[28] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  left: '-134.685px',
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[29] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="tile-label">effect: slideLeftRight</div>
          </div>
          <div className="tile fg-white" data-role="tile" data-effect="slideUp">
            <div className="tile-content">
              <div className="live-slide" style={{
                  top: '15.3889px'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[30] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  top: '-150px',
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[10] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  top: '-150px',
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[11] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  top: '-150px',
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[12] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  top: '-134.611px',
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[13] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="tile-label">effect: slideUp</div>
          </div>
          <div className="tile fg-white" data-role="tile" data-effect="slideDown">
            <div className="tile-content">
              <div className="live-slide" style={{
                  top: '-15.8359px'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[14] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  top: 150,
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[24] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  top: 150,
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[1] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  top: 150,
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[1] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  top: '134.164px',
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[1] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="tile-label">effect: slideDown</div>
          </div>
          <div className="tile fg-white" data-role="tile" data-effect="slideUpDown">
            <div className="tile-content">
              <div className="live-slide" style={{
                  top: '16.6672px'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[17] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  top: '-150px',
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[18] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  top: 150,
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url("images/3.jpg")',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  top: '-150px',
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[19] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
              <div className="live-slide" style={{
                  top: '-133.333px',
                  display: 'block'
                }}>
                <div className="image-container image-format-fill" style={{
                    width: '100%',
                    height: '100%'
                  }}>
                  <div className="frame">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(' + this.state.images[20] + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 0
                      }}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="tile-label">effect: slideUpDown</div>
          </div>
        </div>
      </div>
    </Fragment>); // End of Return
  } // End of Render
} // End of Class
