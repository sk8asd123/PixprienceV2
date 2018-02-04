import React from "react";
import {Col} from "react-materialize";
// import "./Team.css"


class Team extends React.Component{

    

    render(){
        return(
            // 
            <div className="team-member center-align" style={cardColor}>
                <a class="carousel-item" href="#"> <img id={this.props.name} className="responsive-img circle materialboxed" src={this.props.image} alt={this.props.name}/>
                    <h6>{this.props.name}</h6>
                    <p className="text-muted">{this.props.role}</p>
                </a>
            </div>   
        );
    }
}


const cardColor={
    backgroundColor:"#768798"
}

// 
export default Team;