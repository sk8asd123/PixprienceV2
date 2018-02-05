import React from "react";

class TimelineImage extends React.Component{


    render(){
        return(
            <img src={this.props.image} alt={this.props.title} />
        );
    }
}