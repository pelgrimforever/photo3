import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

//app components
import Store from '../services/store.js';

//services

//data models

class Photoslidesselector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      activephoto: null,
      activeindex: 0
    };
  }

  componentDidMount() {
    this.setInitialphoto();
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.photos!==this.props.photos) {
      this.setInitialphoto();
    }
  }

  setInitialphoto = () => {
    if(this.props.photos.length>0) {
      this.setState({ 
        activeindex: 0,
        activephoto: this.props.photos[0]
      })
    }
  }

  clickphoto = (index) => {
    this.setState({ 
      activeindex: index,
      activephoto: this.props.photos[index]
    });
    this.props.onPhotoselected(index);
  }

  onClickleft = (e) => {
    if(this.state.activeindex>0) {
      this.clickphoto(this.state.activeindex-1);
    }
  }

  onClickright = (e) => {
    if(this.state.activeindex<this.props.photos.length-1) {
      this.clickphoto(this.state.activeindex+1);
    }
  }

  showfilmid = (id) => {
    return id.substring(0,3) + "-" + id.substring(3,6);
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

    const photobuttons = this.props.photos.map((item, index) => {
      return (
  <button key={item.PK.filmPK.id + item.PK.id} className={getClass("btn btn-secondary", item)} onClick={() => this.clickphoto(index)}>
    <img src={item.image} height="50" className="row" style={{margin:"auto", display:"table"}} />
    <span className="row" style={{margin:"auto", display:"table"}}>{this.showfilmid(item.PK.filmPK.id)} {item.PK.id}</span>
  </button>
      )}
    )

    return (
<div className="d-flex w-100">
  <div>
    <button className="btn btn-secondary glyphicon glyphicon-chevron-left" style={{ height:95, top:0 }} onClick={this.onClickleft} />
  </div>
  <div className="flex-grow-1 btn-group btn-group-sm p-0 overflowv" style={{ height:95 }} role="group" data-toggle="button">
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
  <div className="d-flex justify-content-end">
    <button className="btn btn-secondary glyphicon glyphicon-chevron-right" style={{ height:95, top:0 }} onClick={this.onClickright} />
  </div>
</div>
    );
  }
}

export default Photoslidesselector;