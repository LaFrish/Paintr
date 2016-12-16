import React, { Component, PropTypes  } from 'react';
import { imageStamp } from '../actions/index';

export default class ImageStamp extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {file: '',imagePreviewUrl: 'http://i.imgur.com/RecH1bT.png'};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.types = ['image/png', 'image/jpg', 'image/gif', 'image/jpeg'];
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleImageUpload(e) {
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

  render(){
    let {imagePreviewUrl} = this.state;

    return (
      <div className="image-container">
        <label className="fileButton">
          <input
            type="file"
            className="fileInput"
            defaultValue={imageStamp}
            onChange={(e)=>this.handleImageUpload(e)} />
          <span>UPLOAD IMAGE</span>
        </label>

        <div className="imgPreview">
          <img id="imgSource" height="125" src={imagePreviewUrl} alt=''/>
        </div>
      </div>
    );
  }
}

ImageStamp.propTypes = {
  imageStamp: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};
