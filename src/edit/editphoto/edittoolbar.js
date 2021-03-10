import React from 'react';

//app components

//services

//data models


class Edittoolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tools: props.tools,
      activetool: props.tools[0],
    };
  }

  clicktool = (tool, index) => {
    this.setState({ activetool: tool} );
    this.props.onToolselected(tool);
  }

  render() {
    const activetool = this.state.activetool;
    var getClass = function(name, tool) {
      if(tool.name===activetool.name)
        return name + ' active';
      return name;
    };

    let toolbuttons = this.state.tools.map((item, index) =>
  <button key={item.name} className={getClass("btn btn-secondary", item)} onClick={() => this.clicktool(item, index)}>
    <img src={window.location.origin + item.icon} />
  </button>
    )

    return (
<div className="d-flex btn-group-vertical btn-group btn-group-sm p-0" role="group" data-toggle="button">
  {toolbuttons}
</div>
    );
  }
}

export default Edittoolbar;