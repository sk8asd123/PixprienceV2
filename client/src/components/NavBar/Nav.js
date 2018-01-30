import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";


class Nav extends Component {

  state ={
    activeKey: 0
  }

  getInitialState() {
    return {activeKey: 1};
  };

  handleSelect(selectedKey) {
    this.setState({activeKey: selectedKey});
  };

  render(){
    return(

    <div>

      <nav>
        <div className="nav-wrapper" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
          <a href="#" className="brand-logo">New York Times Article Search</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li eventKey={1}><a href="./home" >Home</a></li>
            <li eventKey={2}><a href="./saved">Saved</a></li>
          </ul>
        </div>
      </nav>


    </div>
    )
  }
}


export default Nav;
