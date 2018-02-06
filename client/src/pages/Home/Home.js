/////////////////////////////////////////////// /* Import Stock React Components */ ////////////////////////////////////////////////////////
import React, {Component} from "react";

/////////////////////////////////////////////// /* Components */ ////////////////////////////////////////////////////////
import CommunityPage from "../../components/CommunityPage"


/////////////////////////////////////////////// /* Main */ //////////////////////////////////////////////////////////
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Replace Community Page with your Component to Test Your Component */}
                <CommunityPage/>
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