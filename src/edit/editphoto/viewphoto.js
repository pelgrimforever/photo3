import React from 'react';

//app components

//services

//data models


class Viewphoto extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <img src={this.props.image} className="img-fluid rounded mx-auto my-auto" />
    );
  }
}

export default Viewphoto;