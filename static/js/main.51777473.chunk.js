(window["webpackJsonpweather-map"]=window["webpackJsonpweather-map"]||[]).push([[0],{19:function(e,t,a){e.exports=a(46)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),m=(a(24),a(2)),o=a(3),u=a(5),s=a(4),i=a(6),d=(a(25),a(26),function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.change,n=e.submit;return l.a.createElement("div",null,l.a.createElement("h1",{className:"mx-auto",style:{width:"800px"}}," Current weather and forecasts in your city"),l.a.createElement("div",{className:"input-group mb-3 container"},l.a.createElement("input",{type:"text",name:"input",className:"form-control",placeholder:"City name","aria-label":"city name","aria-describedby":"button-addon",value:t,onChange:function(e){a(e)}}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon2",onClick:function(e){return n(e)}},"OK"))))}}]),t}(l.a.Component)),E=a(7),h=a.n(E),p=(a(28),function(e){var t,a,n=e.weather,r=(n.date,n.city),c=n.geoCoords,m=n.sunrise,o=n.sunset,u=n.temp,s=n.temp_min,i=n.temp_max,d=n.pressure,E=n.wind,p=n.humidity,w=n.rain,b=n.snow,y=n.cloudiness;return!0===e.error?l.a.createElement("h1",null,"City not found"):(w&&(t=l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"}),l.a.createElement("td",null,"Rain:"),l.a.createElement("td",null,w["1h"],"mm"),l.a.createElement("td",null))),b&&(a=l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"}),l.a.createElement("td",null,"Snow:"),l.a.createElement("td",null,b["1h"],"mm"),l.a.createElement("td",null))),r&&c?l.a.createElement("div",null,l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"}),l.a.createElement("th",{scope:"col"}),l.a.createElement("th",{scope:"col"}),l.a.createElement("th",{scope:"col"}))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"}),l.a.createElement("td",null,"Weather in:"),l.a.createElement("td",null,r),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"}),l.a.createElement("td",null,"Geo coordinates:"),l.a.createElement("td",null,[c]),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"}),l.a.createElement("td",null,"Sunrise:"),l.a.createElement("td",null,h()(m,"X").format("HH:mm DD.MM.YYYY")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"}),l.a.createElement("td",null,"Sunset:"),l.a.createElement("td",null,h()(o,"X").format("HH:mm DD.MM.YYYY")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"}),l.a.createElement("td",null,"Temperature:"),l.a.createElement("td",null,u,"\xb0C"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"}),l.a.createElement("td",null,"Min. temperature:"),l.a.createElement("td",null,s,"\xb0C"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"}),l.a.createElement("td",null,"Max. temperature:"),l.a.createElement("td",null,i,"\xb0C"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"}),l.a.createElement("td",null,"Humidity:"),l.a.createElement("td",null,p,"%"),l.a.createElement("td",null)),t,a,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"}),l.a.createElement("td",null,"Wind:"),l.a.createElement("td",null,E,"m/s"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"}),l.a.createElement("td",null,"Cloudiness:"),l.a.createElement("td",null,y,"%"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"}),l.a.createElement("td",null,"Pressure:"),l.a.createElement("td",null,d," hPa"),l.a.createElement("td",null))))):l.a.createElement("h1",null,"No city has been selected"))}),w=a(18),b=a.n(w),y="05508bb378ad891b493b0c886cca7a57",v=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleInputChange=function(e){a.setState({value:e.target.value})},a.handleCitySubmit=function(e){e.preventDefault(),b.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(a.state.value,"&appid=").concat(y,"&units=metric")).then((function(e){var t=e.data;console.log("success",t),a.setState({imBusy:!1,error:!1,weather:{date:a.state.date,city:a.state.value,geoCoords:"lat: ".concat(t.coord.lat,", lon: ").concat(t.coord.lon),sunrise:t.sys.sunrise,sunset:t.sys.sunset,temp:t.main.temp,temp_min:t.main.temp_min,temp_max:t.main.temp_max,pressure:t.main.pressure,wind:t.wind.speed,humidity:t.main.humidity,rain:t.rain,snow:t.snow,cloudiness:t.clouds.all}})})).catch((function(e){console.log("error",a.state,e),a.setState((function(e){return{error:!0}}))}))},a.state={value:"",weather:{date:"",city:"",geoCoords:"",sunrise:"",sunset:"",temp:"",temp_min:"",temp_max:"",pressure:"",wind:"",humidity:"",rain:"",snow:"",cloudiness:""},imBusy:!1,error:!1},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=(e.value,e.weather,e.imBusy);e.error;return!0===t?l.a.createElement("div",{className:"container"},l.a.createElement("h4",null,"Please wait")):l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"app container"},l.a.createElement(d,{value:this.state.value,change:this.handleInputChange,submit:this.handleCitySubmit}),l.a.createElement(p,{error:this.state.error,weather:this.state.weather})))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.51777473.chunk.js.map