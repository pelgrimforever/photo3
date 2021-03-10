import React from 'react';

class Appevents {

  //subscribers
  notifyactions = {};

  //subscribe a component
  notifyme = (componentname, notifyaction) => {
    this.notifyactions[componentname] = notifyaction;
  }

  //notify all subscribers
  notifyall = () => {
  	console.log("bloglinecounter " + this.bloglinecounter);
    for(var componentname in this.notifyactions) {
      this.notifyactions[componentname]();
    };
  }

	photocounter = 0;
	photoinc = () => {
		this.photocounter += 1;
		this.notifyall();
	}

}

export default Appevents;
