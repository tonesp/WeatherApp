export default `
    <style include="weather-styles"></style>
    <app-location route="{{route}}" use-hash-as-path></app-location>
    <app-route
        route="{{route}}"
        pattern="/:page"
        data="{{routeData}}"
        tail="{{subroute}}"></app-route>
        
    <iron-ajax auto
        url="http://api.openweathermap.org/data/2.5/weather?q={{route.path}}&APPID=54d121f6af892d1915cd75e20dec17f9&units=metric"
        handle-as="json"
        loading="{{loading}}"
        last-response="{{data}}">
    </iron-ajax>

    <div class="divTitle">Weather with Polymer3</div>
    <paper-spinner alt="Loading data..." active="[[loading]]"></paper-spinner>
    <div hidden$="[[!loading]]">loading</div>

    <div class="divTable blueTable">
        <div class="divTableBody">
            <div class="divTableRow">
                <div class="divTableCell">City</div>
                <div class="divTableCell">[[data.name]] ([[data.sys.country]])</div>
            </div>
            <div class="divTableRow">
                <div class="divTableCell">Temp</div>
                <div class="divTableCell">[[data.main.temp]]</div>
            </div>
            <div class="divTableRow">
                <div class="divTableCell">Long</div>
                <div class="divTableCell">[[data.coord.lon]]</div>
            </div>
            <div class="divTableRow">
                <div class="divTableCell">Lat</div>
                <div class="divTableCell">[[data.coord.lat]]</div>
            </div>
            
            <div class="divTableRow">
                <div class="divTableCell">Sunrise</div>
                <div class="divTableCell">[[getLocalTimeData(data.sys.sunrise)]]</div>
            </div>
            <div class="divTableRow">
                <div class="divTableCell">Sunset</div>
                <div class="divTableCell">[[getLocalTimeData(data.sys.sunset)]]</div>
            </div>
            <!--<div class="divTableRow">
                <div class="divTableCell">Weather</div>
                <div class="divTableCell"><img src="http://openweathermap.org/img/w/[[data.weather.0.icon]].png"/>[[data.weather.0.description]]</div>
            </div>-->
            <div class="divTableRow">
                <div class="divTableCell">Forecast</div>
                <div class="divTableCell">
                    <iron-ajax auto
                        url="http://api.openweathermap.org/data/2.5/forecast?q={{route.path}}&APPID=54d121f6af892d1915cd75e20dec17f9&units=metric"
                        handle-as="json"
                        loading="{{loading}}"
                        last-response="{{forecast}}">
                    </iron-ajax>
                    <paper-spinner alt="Loading data..." active="[[loading]]"></paper-spinner>
                    <div hidden$="[[!loading]]">loading</div>

                    <div class="divTable blueTable">
                        <div class="divTableBody">
                            <div class="divTableRow">
                                <div class="divTableCell">  
                                    <div class="divTable  blueTable">
                                        <div class="divTableHeading">
                                            <div class="divTableRow">
                                                <div class="divTableHead">Time</div>
                                                <div class="divTableHead">Temp</div>
                                                <div class="divTableHead">Humidity</div>
                                                <div class="divTableHead"></div>
                                            </div>
                                        </div>
                                        <div class="divTableBody">
                                            <template is="dom-repeat" items="[[forecast.list]]">
                                                <div class="divTableRow">
                                                    <div class="divTableCell">[[item.dt_txt]]</div>
                                                    <div class="divTableCell">[[item.main.temp]] °C</div>
                                                    <div class="divTableCell">[[item.main.humidity]] %</div>
                                                    <div class="divTableCell"><img src="http://openweathermap.org/img/w/[[item.weather.0.icon]].png"/></div>
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    `;