import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

//app components
import Store from '../services/store.js';

//services

//data models

class Photoselector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      activephoto: null,
    };
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.film!=this.props.film) {
      this.setState({ activephoto: null });
    }
  }

  clickphoto = (photo, index) => {
    this.setState({ activephoto: photo} );
    this.props.onPhotoselected(photo);
  }

  render() {

    const showspinner = this.state.loading || this.props.loading;

    const activephoto = this.state.activephoto;
    var getClass = function(name, photo) {
      if(activephoto!=null)
        if(photo.PK.film()===activephoto.PK.film() && photo.PK.id===activephoto.PK.id)
          return name + ' active';
      return name;
    };

    const photobuttons = this.props.photos.map((item, index) =>
  <button key={item.PK.id} className={getClass("btn btn-secondary", item)} onClick={() => this.clickphoto(item, index)}>
    <img src={item.image} height="50" className="row" />
    <span className="row" style={{margin:"auto", display:"table"}}>{item.PK.id}</span>
  </button>
    )

    return (
<div className="d-flex btn-group btn-group-sm p-0 overflowv" style={{ height:95 }} role="group" data-toggle="button">
{ showspinner ?
  (
    <div className="d-flex justify-content-center">
      <Spinner className="spinner-border-center" animation="border" role="status" />
    </div>
  ) : (
  <>
  {photobuttons}
  </>
  )
}
</div>
    );
  }
}

export default Photoselector;