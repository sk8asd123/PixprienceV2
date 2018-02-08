// image-format-hd //slide-up-2
export default class Slideupcontainer extends Component {
  render() {
    return (
      <div className="tile fg-white" data-role="tile">
        <div className="tile-content slide-up">
          <div className="slide">
            <div className="image-container image-format-square" style={{
                width: '100%' // image-format-hd
              }}/>
              <div className="frame">
                <div style={{
                    width: '100%',
                    height: 150,
                    backgroundImage: 'url(' + this.state.images + ')',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: 0
                  }}/>
              </div>
            </div>
          </div>
          <div className="slide-over op-cyan text-small padding10">
            {this.props.title}
          </div>
          <div className="tile-label">{this.props.label}}</div>
        </div>
    );
  }
}

//  <Slideupcontainer image={this.state.images[29]} title="Slide Up" label="Slide Up"/>
