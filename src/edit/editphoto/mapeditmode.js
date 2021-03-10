import React from 'react';

//app components

//services

//data models

class Mapeditmode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modes: props.modes,
      activemode: props.modes[0],
    };
  }

  clickmode = (mode, index) => {
    this.setState({ activemode: mode} );
    this.props.onModeselected(mode);
  }

  render() {
    const activemode = this.state.activemode;
    var getClass = function(name, mode) {
      if(mode.name===activemode.name)
        return name + ' active';
      return name;
    };

    let modebuttons = this.state.modes.map((item, index) =>
  <button key={item.name} className={getClass("btn btn-primary", item)} onClick={() => this.clickmode(item, index)}>
    {item.text}
  </button>
    )

    return (
<div className="d-flex btn-group btn-group-sm p-0" role="group" data-toggle="button">
  {modebuttons}
</div>
    );
  }
}

export default Mapeditmode;