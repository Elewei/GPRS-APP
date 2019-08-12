
/*
  获取天气信息

*/


function get_weather_info() {
  var ip = ip_str.ip;
  console.log(ip);
  /* 获取天气信息 */
  $.ajax({
    type: "get",
    dataType: "json",
    url: "https://free-api.heweather.net/s6/weather?location=47.103.68.81&key=c3af91c9c649423386bd645f32f5d67f",
    start: function () { console.log("开始获取天气数据了") },
    complete: function () { console.log("获取天气数据完成") },
    success: function (data) {
      console.log(data);
      
      let currentCity = data.HeWeather6[0].basic.location;
      let currentTmp = data.HeWeather6[0].now.tmp + '℃';
      let currentWeather = data.HeWeather6[0].now.cond_txt;
      let currentWeatherPic = data.HeWeather6[0].now.cond_code;
	  
	  console.log(currentTmp);
	  console.log(currentWeather);
	  console.log(currentCity);
	  console.log(currentWeatherPic);
	  
	  
	  document.getElementById("wendu").innerText = currentTmp;
	  document.getElementById("tianqi").innerText = currentWeather;
	  document.getElementById("city").innerText = currentCity;
	  //document.getElementById("weatherPic").innerText = currentWeatherPic;  
	  let weatherPicPath = '/static/img/heweather/' + currentWeatherPic + '.png';
	  console.log(weatherPicPath);
	  $('#weatherPic').attr("src",weatherPicPath);    
    }
  });

  setTimeout("get_weather_info()", 600000);
}




addLoadEvent(get_weather_info);
