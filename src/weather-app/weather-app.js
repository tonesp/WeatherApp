import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import './weather-css.js';

import TEMPLATE from './weather-template.js'

class WeatherApp extends PolymerElement {
  static get template() {
    var oTemplate=document.createElement('template')
		oTemplate.innerHTML=TEMPLATE;
		return oTemplate;
  }
  static get properties() {
    return {
      page:{
        type: String,
        reflectToAttribute: true
      }
    };
  }
  static get observers(){
    return ['_routerChanged(route.path)'];
  }
  _routerChanged(page){
    if (page=="")
      location.href = location.origin + "/components/weather/#Barcelona";
  }
  getLocalTimeData(UnixDate){
    var date = new Date(UnixDate*1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return(formattedTime);
  }
}
window.customElements.define('weather-app', WeatherApp);
