/////////////////////////////////////////////// /* Import Stock React Components */ ////////////////////////////////////////////////////////
import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/////////////////////////////////////////////// /* Components */ ////////////////////////////////////////////////////////
import API from "../../utils/API"
import CommunityPage from "../../components/CommunityPage"
import About from "../../components/About"


/////////////////////////////////////////////// /* Main */ //////////////////////////////////////////////////////////

class Home extends Component {


  render() {
    return (
      <React.Fragment>
        {/* Replace Community Page with your Component to Test Your Component */}
        <About />
        {/* <CommunityPage/> */}
        {/* <Router>
          <switch>
            <Route path="/" component={LoginPage}/>
            <Route path="/CommunityPage" component={CommunityPage}/>
            <Route path="/AboutPage" component={AboutPage}/>
          </switch>
        </Router>; */}
      </React.Fragment>);
  } // End of Render
} // End of Class

export default Home;
