import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import ReactDropzone from "react-dropzone";
import request from "superagent";

export default class OnDrop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    };
  }

  onDrop = (files) => {
    // POST to a test endpoint for demo purposes
    const req = request.post('https://httpbin.org/post');

    files.forEach(file => {
      req.attach(file.name, file);
    });

    req.end();
  }

  onPreviewDrop = (files) => {
    this.setState({
      files: this.state.files.concat(files),
    });
  }

  render() {
    const previewStyle = {
      display: 'inline',
      width: 100,
      height: 100,
    };

    return (
      <div className="app">
        <h1>react-dropzone Demo</h1>

        <h2>Basic Example</h2>
        <ReactDropzone
          onDrop={this.onDrop}
        >
          Drop your best gator GIFs here!!
        </ReactDropzone>

        <h2>Image Previews</h2>
        <ReactDropzone
          accept="image/*"
          onDrop={this.onPreviewDrop}
        >
          Drop an image, get a preview!
        </ReactDropzone>
        {this.state.files.length > 0 &&
          <Fragment>
            <h3>Previews</h3>
            {this.state.files.map((file) => (
              <img
                alt="Preview"
                key={file.preview}
                src={file.preview}
                style={previewStyle}
              />
            ))}
          </Fragment>
        }

      </div>
    );
  }
}

//const container = document.createElement("div");
//document.body.appendChild(container);
//render(<OnDrop />, container);