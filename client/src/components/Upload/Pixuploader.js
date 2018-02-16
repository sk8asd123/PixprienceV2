// import React from 'react';
// import ImageUploader from 'react-images-upload';
// import FileBase64 from 'react-file-base64';
// import axios from "axios";
// import {Col, Row, Button} from 'react-materialize';
// import './Pixuploader.css'

// // class Pixupload extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.handleSubmit = this.handleSubmit.bind(
// //       this
// //     );
// //   }

// //   handleSubmit(event) {
// //     event.preventDefault();


// //     console.log("upload clicked");

// //     let imageFile = this.refs.imageUpload.value;

// //     // let currentImage = imageFile;

// //     this.props.setImagePreview(imageFile);
// //   }


// //   componentDidMount(){
// //     let that = this;
// //     var input = document.getElementById('file-input');
// //     input.onchange = function(){
// //       let imageFile = that.refs.imageUpload.value;
// //       console.log(imageFile);

// //       // console.log(file.name);

// //        that.props.setImagePreview(imageFile )
// //       // alert(this.file)
// //     }
// //   }

// //   render() {
// //     return (
// //       <form onSubmit ={this.handleSubmit}>
// //         <label>
// //           <span className="attach-doc hoverColor">Upload an Image &nbsp;<i className="fa fa-upload" aria-hidden="true"></i></span>
// //           <input
// //             type="file"
// //             ref= "imageUpload"
// //             style={displayNone}
// //             id = "file-input"
// //           />
// //           {/* <input type="submit" className="button" /> */}
// //         </label>
// //       </form>
// //     );
// //   }
// // }
// // const displayNone={
// //   display:"none"
// // }

// // export default Pixupload


// class Pixupload extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       file: '',
//       imagePreviewUrl: '',
//       img: [],
//       title: '',
//       notes:''
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleInputChangeNotes = this.handleInputChangeNotes.bind(this);
//     this.handleFileUpload = this.handleFileUpload.bind(this);
//   }


//    //FUNCTION FOR WHAT HAPPENS WHEN SUBMIT BUTTON IS CLICKED AKA COLLECTING AND SENDING FILE
//    handleSubmit(event) {
//     event.preventDefault();

//     var tom = {
//       base64: this.state.img[0].base64,
//       notes: this.state.notes
//     }

//     axios.post('http://localhost:8080/api/upload', tom)
//     .then(function(response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }

//   handleInputChangeNotes(e) {
//     console.log('handle inpout chance notes@@');
//     this.setState({notes: e.target.value})
//   }
//   handleFileUpload(picture) {
//     this.setState({
//         img: this.state.img.concat(picture),
//     });
//   }

//   _handleSubmit(e) {
//     e.preventDefault();
//     // TODO: do something with -> this.state.file
//     console.log('handle uploading-', this.state.file);
//   }

//   _handleImageChange(e) {
//     e.preventDefault();

//     let reader = new FileReader();
//     let file = e.target.files[0];

//     reader.onloadend = () => {
//       this.setState({
//         file: file,
//         imagePreviewUrl: reader.result
//       });
//     }

//     reader.readAsDataURL(file)
//   }

//   render() {
//     let {imagePreviewUrl} = this.state;
//     let $imagePreview = null;
//     if (imagePreviewUrl) {
//       $imagePreview = (<img src={imagePreviewUrl} />);
//     } else {
//       $imagePreview = (<img src="http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder.png" />);
//     }

//     return (
//       <div className="previewComponent">

//         <Row>
//           <Col s={2}></Col>
//           <Col s={8} className="center-align">
//             <div className="imgPreview">
//               {$imagePreview}
//             </div>
//           </Col>
//           <Col s={2}></Col>
//         </Row>
//         <Row>
//         <FileBase64
//           multiple={ true }
//           onDone={ this.handleFileUpload.bind(this)}
//           onChange={(e)=>this._handleSubmit(e)}
//           style={hideDisplay} />

//             <form onSubmit={(e)=>this._handleSubmit(e)}>
//               <Col s={12} className="center-align">
//                 <label>
//                   <span className="attach-doc hoverColor">Upload an Image &nbsp;<i className="fa fa-upload" aria-hidden="true"></i></span>
//                   <input className="fileInput"
//                     type="file"
//                     onChange={(e)=>this._handleImageChange(e)}
//                     style={hideDisplay}/>
//                 </label>
//               </Col>
//               <Col s={12}  className="center-align">
//                 <button className="submitButton"
//                   type="submit"
//                   onClick={this.handleSubmit}>Submit</button>
//               </Col>
//             </form>

//         </Row>
//       </div>
//     )
//   }
// }

// const hideDisplay={
//   display:"none"
// }


// export default Pixupload;

import React from 'react';
//import ImageUploader from 'react-images-upload';
import FileBase64 from 'react-file-base64';
import axios from "axios";
import ImageUploader from 'react-images-upload';


class Pixupload extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            //photos: [
            img: [],
            notes: "",
            title: "",
            userEmail: ""
            // file = this.fileInput.files[0],
            // fileName = file.name,
            // loc = this.textInput;
            // notes = this.textInput;
            //]
        };

        //CALLBACK USED WHEN CHANGING PHOTO FILE TO BASE 64
        // getFiles(files){
        //   this.setState({ files: files })
        // }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChangeNotes = this.handleInputChangeNotes.bind(this);
        this.handleInputChangeTitle = this.handleInputChangeTitle.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }
    //FUNCTION FOR WHAT HAPPENS WHEN SUBMIT BUTTON IS CLICKED AKA COLLECTING AND SENDING FILE
    handleSubmit(event) {
        event.preventDefault();
        // console.log('THIS IS FILE INPUT ____----', this.fileInput);
        // console.log(this.fileInput.files[0]);
        // console.log(this.textInput);
        // console.log(this.fileInput.files[0].name);
        // var pixObject = {
        //       //var user_id: sessionStorage.getItem("userID"),
        //       file: this.fileInput.files[0],
        //       fileName: this.fileInput.files[0].name,
        //       loc: this.textInput,
        //       notes: this.textInput
        //     };
        //SENDING THE PIC DATA TO THE BACKEND
        // console.log('we are about to save this thing ----', pixObject);

        var data = {
            base64: this.state.img[0].base64,
            title: this.state.title,
            notes: this.state.notes,
            userEmail: localStorage.getItem("userEmail")}

        axios.post("/test/upload", data)
            .then(function(response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        //
        // fetch("http://localhost:8080/api/upload", {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin':'*'
        //   },
        //   body: {bs: 'my fake thing'}
        // }).then(function(res) {
        //
        //   if (res.ok) {
        //     console.log('success!!!')
        //     res.json().then(function(message) {
        //       console.log("Image Sucessfully Stored in Database");
        //     });
        //   } else {
        //     console.log("Upload Failed");
        //   }
        // });
    }

    handleInputChangeNotes(e) {
        console.log('handle inpout chance notes@@');
        this.setState({notes: e.target.value})
    }
    handleInputChangeTitle(e) {
        console.log('handle inpout chance notes@@');
        this.setState({title: e.target.value})
    }
    handleFileUpload(picture) {
        this.setState({
            img: this.state.img.concat(picture),
        });
    }

//CREATION OF THE FORM UI
    render() {
        console.log(this.state);
        return (
            <div>
            {/*<form
             onSubmit={this.handleSubmit}
             > */}
        {/*<label>
         CHOOSE A PIC:
         <input
         name="img"
         type="file"
         ref={input => {
         this.fileInput = input;
         ;
         }}
         onChange={this.handleFileUpload}
         />
         </label>*/}
    <FileBase64
        multiple={ true }
        onDone={ this.handleFileUpload.bind(this)}
    />
    <br />
        <label>
        Title:
    <input
        name="title"
        type="text"
        ref={input => {
            this.textInput = input;
        console.log(input);
        ;
    }}
        //value={this.state.notes}
        onChange={this.handleInputChangeTitle} />
    </label>
        <br />
        <label>
        Notes:
    <input
        name="notes"
        type="text"
        ref={input => {
            this.textInput = input;
        ;
    }}
        //value={this.state.notes}
        onChange={this.handleInputChangeNotes} />
    </label>
        <button onClick={this.handleSubmit}>
        SUBMIT UR PIC :)
    </button>
        </div>
    );
}
}

export default Pixupload
