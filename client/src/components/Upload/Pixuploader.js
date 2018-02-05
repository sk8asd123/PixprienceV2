import React from 'react';
import ImageUploader from 'react-images-upload';
import {Col, Row, Button} from 'react-materialize';
import './Pixuploader.css'

// class Pixupload extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(
//       this
//     );
//   }

//   handleSubmit(event) {
//     event.preventDefault();
    

//     console.log("upload clicked");

//     let imageFile = this.refs.imageUpload.value;

//     // let currentImage = imageFile;

//     this.props.setImagePreview(imageFile);
//   }
  

//   componentDidMount(){
//     let that = this;
//     var input = document.getElementById('file-input');
//     input.onchange = function(){
//       let imageFile = that.refs.imageUpload.value;
//       console.log(imageFile);

//       // console.log(file.name);
      
//        that.props.setImagePreview(imageFile )
//       // alert(this.file)
//     }
//   }

//   render() {
//     return (
//       <form onSubmit ={this.handleSubmit}>
//         <label>
//           <span className="attach-doc hoverColor">Upload an Image &nbsp;<i className="fa fa-upload" aria-hidden="true"></i></span>
//           <input
//             type="file"
//             ref= "imageUpload"
//             style={displayNone} 
//             id = "file-input"
//           />
//           {/* <input type="submit" className="button" /> */}
//         </label>
//       </form>
//     );
//   }
// }
// const displayNone={
//   display:"none"
// }

// export default Pixupload


class Pixupload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<img src="http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder.png" />);
    }

    return (
      <div className="previewComponent">
        <Row>
          <Col s={2}></Col>
          <Col s={8} className="center-align"> 
            <div className="imgPreview">
              {$imagePreview}
            </div>
          </Col>
          <Col s={2}></Col>
        </Row>
        <Row>
            <form onSubmit={(e)=>this._handleSubmit(e)}>
              <Col s={12} className="center-align">
                <label>
                  <span className="attach-doc hoverColor">Upload an Image &nbsp;<i className="fa fa-upload" aria-hidden="true"></i></span>
                  <input className="fileInput" 
                    type="file" 
                    onChange={(e)=>this._handleImageChange(e)} 
                    style={hideDisplay}/>
                </label>
              </Col>
              <Col s={12}  className="center-align">
                <button className="submitButton" 
                  type="submit" 
                  onClick={(e)=>this._handleSubmit(e)}>Submit</button>
              </Col>
            </form>
          
        </Row>
      </div>
    )
  }
}

const hideDisplay={
  display:"none"
}


export default Pixupload;