import React from 'react';

//app components
import Store from '../services/store.js';

//services
import Rsfilm from '../services/film/rest/table/rsfilm.js';

//data models

function showfilmid(id) {
  return id.substring(0,3) + "'" + id.substring(3,6);
}

class Filmselector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      activefilm: null,
    };
  }

  async componentDidMount() {
    await this.loadfilms();
  }

  componentWillUnmount() {
  }

  loadfilms = async () => {
    const films = await Rsfilm.getall(Store.user);
    this.setState( { films: films } )
  }

  clickfilm = (film, index) => {
    this.setState({ activefilm: film} );
    this.props.onFilmselected(film);
  }

  render() {
    const activefilm = this.state.activefilm;
    var getClass = function(name, film) {
      if(activefilm!=null)
        if(film.PK.id===activefilm.PK.id)
          return name + ' active';
      return name;
    };

    let filmbuttons = this.state.films.map((item, index) =>
  <button key={item.PK.id} className={getClass("btn btn-secondary", item)} onClick={() => this.clickfilm(item, index)}>
    {showfilmid(item.PK.id)}
  </button>
    )

    return (
<div className="d-flex btn-group btn-group-sm p-0 overflowv" style={{ height:50 }} role="group" data-toggle="button">
  {filmbuttons}
</div>
    );
  }
}

export default Filmselector;