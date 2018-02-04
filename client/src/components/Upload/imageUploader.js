import React from 'react';
import ImageUploader from 'react-images-upload';

class Pixupload extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(
      this
    );
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${
        this.fileInput.files[0].name
      }`
    );
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input
            type="file"
            ref={input => {
              this.fileInput = input;
            }}
          />
        </label>
        <br />
        <button type="submit">
          CHOOSE A PIX
        </button>
      </form>
    );
  }
}


export default Pixupload
