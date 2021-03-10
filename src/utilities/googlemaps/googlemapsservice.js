import axios from 'axios';

//app components
import Store from '../../services/store.js';

class Googlemapsservice {
	static REVERSEGEOCODE_WEBSERVICE = "https://maps.googleapis.com/maps/api/geocode/json?latlng=:lat:,:lng:&sensor=false&key=";

  static reversegeocode = async (location) => {
    let url = this.REVERSEGEOCODE_WEBSERVICE;
    url = url.replace(":lat:", location.lat);
    url = url.replace(":lng:", location.lng);
    let responsedata = null;
    try {
      const resp = await axios.get(url + Store.google_api_key);
      responsedata = resp.data;
    } catch(err) {
      console.log(err);
    }
    return responsedata;
  }
}

export default Googlemapsservice;
