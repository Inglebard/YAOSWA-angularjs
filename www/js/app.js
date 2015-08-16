var yaoswa = angular.module('yaoswa',['ngRoute','ngSanitize','afkl.lazyImage']);

yaoswa.config(function($routeProvider) {
	$routeProvider
		.when('/yaoswa',{title: 'YAOSWA',templateUrl :'templates/home.html', controller: 'HomeCtrl'})
		.when('/about',{title: 'About',templateUrl :'templates/about.html', controller: 'AboutCtrl'})
		.when('/settings',{title: 'Settings',templateUrl :'templates/settings.html', controller: 'SettingCtrl'})
		.otherwise('/yaoswa',{title: 'YAOSWA',redirectTo :'/yaoswa'});
});
/*
yaoswa.config(function ($translateProvider) {
	$translateProvider.translations('en', {
		SETTINGS : 'Settings',
		ABOUT: 'About',
		TEMP_LABEL_STANDARD : 'standard',
		TEMP_LABEL_SETTING_STANDARD : 'Kelvin (K)',
		TEMP_UNIT_STANDARD : 'K',
		TEMP_LABEL_IMPERIAL : 'imperial',
		TEMP_LABEL_SETTING_IMPERIAL : 'Fahrenheit (°F)',
		TEMP_UNIT_IMPERIAL : '°F',
		TEMP_LABEL_METRIC : 'metric',
		TEMP_LABEL_SETTING_METRIC : 'Celsius (°C)',
		TEMP_UNIT_METRIC : '°C',
		SPEED_LABEL_METERSSECOND: 'meterspersecond',
		SPEED_LABEL_SETTING_METERSSECOND : 'Meters per second (m/s)',
		SPEED_UNIT_METERSSECOND : 'm/s',
		SPEED_LABEL_KILOMETERSHOUR : 'kilometersperhour',
		SPEED_LABEL_SETTING_KILOMETERSHOUR : 'Kilometers per hour (km/h)',
		SPEED_UNIT_KILOMETERSHOUR : 'km/h',
		SPEED_LABEL_MILESHOUR : 'milesperhour',
		SPEED_LABEL_SETTING_MILESHOUR : 'Miles per hour (MpH)',
		SPEED_UNIT_MILESHOUR : 'MpH',
		PERC_LABEL_DEFAULT : 'default',
		PERC_UNIT_DEFAULT : '%',
		PRESSURE_LABEL_DEFAULT : 'default',
		PRESSURE_UNIT_DEFAULT : '%',
		PRECIP_LABEL_MILLIMETERS : 'millimeters',
		PRECIP_UNIT_MILLIMETERS : 'mm',
		PRECIP_LABEL_INCH : 'inches',
		PRECIP_UNIT_INCH : 'in',
		UNKNOW_WIND_ORIENT : "N/A",
		WIND_ORIENT_N : "N",
		WIND_ORIENT_NNE : "NNE",
		WIND_ORIENT_NE : "NE",
		WIND_ORIENT_NEN : "ENE",
		WIND_ORIENT_E : "E",
		WIND_ORIENT_ESE : "ESE",
		WIND_ORIENT_SE : "SE",
		WIND_ORIENT_SSE : "SSE",
		WIND_ORIENT_S : "S",
		WIND_ORIENT_SSW : "SSW",
		WIND_ORIENT_SW : "SW",
		WIND_ORIENT_WSW : "WSW",
		WIND_ORIENT_W : "W",
		WIND_ORIENT_WNW : "WNW",
		WIND_ORIENT_NW : "NW",
		WIND_ORIENT_NNW : "NNW",
		WEATHER_STARRY_SKY : "Starry sky",
		WEATHER_PARTLY_STARRY_SKY : "Partly starry sky",			
		CURRENT_WEATHER : "Current Weather",
		HOURLY_WEATHER : "Hourly Weather",
		DAILY_WEATHER : "Daily Weather"	,
		LAT_LONG : 'Lon : {{LON}}, Lat : {{LAT}}',		
		CITY_NOT_FOUND : "City not Found.",
		DATA_NOT_RECEIVED : "Unable to get data.<br/>Check your network connection.",
		CITY_NOT_SET : "No city set.",
		CURRENT_CITY_SET : "Current city set : {{CITY}}.",
		LIKE_OWM_CITY : "Will search the closest city.",
		ACCURATE_OWM_CITY : "Will search the exact city.",
		SETTINGS_CITY : "Will use the registered city.",
		AUTO_CITY : "Will use wifi/GPS location if enable.",
		TEMP_UNIT_SELECTED : "Selected temp unit : {{UNIT}}.",
		SPEED_UNIT_SELECTED : "Selected speed unit : {{UNIT}}.",
		APP_LANG_LABEL_SELECTED : "Language for the application.<br/>Currently selected : {{LABEL_SETTING}}.",
		WEATHER_LANG_LABEL_SELECTED : "Language weather from the provider OpenWeatherMap.<br/>Currently selected : {{LABEL_SETTING}}.",
		MAX_DEFAULT_NUMBER_RESULT : "Will use default max number of result.",		
		MAX_SET_NUMBER_RESULT : "Max number of result if available : {{NUMBER}}.",
	});
	$translateProvider.translations('fr', {
		SETTINGS : 'Paramètres',
		ABOUT: 'Á Propos',
		TEMP_LABEL_STANDARD : 'standard',
		TEMP_LABEL_SETTING_STANDARD : 'Kelvin (K)',
		TEMP_UNIT_STANDARD : 'K',
		TEMP_LABEL_IMPERIAL : 'imperial',
		TEMP_LABEL_SETTING_IMPERIAL : 'Fahrenheit (°F)',
		TEMP_UNIT_IMPERIAL : '°F',
		TEMP_LABEL_METRIC : 'metric',
		TEMP_LABEL_SETTING_METRIC : 'Celsius (°C)',
		TEMP_UNIT_METRIC : '°C',
		SPEED_LABEL_METERSSECOND: 'meterspersecond',
		SPEED_LABEL_SETTING_METERSSECOND : 'Metres par seconde (m/s)',
		SPEED_UNIT_METERSSECOND : 'm/s',
		SPEED_LABEL_KILOMETERSHOUR : 'kilometersperhour',
		SPEED_LABEL_SETTING_KILOMETERSHOUR : 'Kilometres par heure (km/h)',
		SPEED_UNIT_KILOMETERSHOUR : 'km/h',
		SPEED_LABEL_MILESHOUR : 'milesperhour',
		SPEED_LABEL_SETTING_MILESHOUR : 'Miles par heure (MpH)',
		SPEED_UNIT_MILESHOUR : 'MpH',
		PERC_LABEL_DEFAULT : 'default',
		PERC_UNIT_DEFAULT : '%',
		PRESSURE_LABEL_DEFAULT : 'default',
		PRESSURE_UNIT_DEFAULT : '%',
		PRECIP_LABEL_MILLIMETERS : 'millimeters',
		PRECIP_UNIT_MILLIMETERS : 'mm',
		PRECIP_LABEL_INCH : 'inches',
		PRECIP_UNIT_INCH : 'in',
		UNKNOW_WIND_ORIENT : "N/A",
		WIND_ORIENT_N : "N",
		WIND_ORIENT_NNE : "NNE",
		WIND_ORIENT_NE : "NE",
		WIND_ORIENT_NEN : "ENE",
		WIND_ORIENT_E : "E",
		WIND_ORIENT_ESE : "ESE",
		WIND_ORIENT_SE : "SE",
		WIND_ORIENT_SSE : "SSE",
		WIND_ORIENT_S : "S",
		WIND_ORIENT_SSW : "SSW",
		WIND_ORIENT_SW : "SW",
		WIND_ORIENT_WSW : "WSW",
		WIND_ORIENT_W : "W",
		WIND_ORIENT_WNW : "WNW",
		WIND_ORIENT_NW : "NW",
		WIND_ORIENT_NNW : "NNW",
		WEATHER_STARRY_SKY : "Ciel étoilé",
		WEATHER_PARTLY_STARRY_SKY : "Ciel partiellement étoilé",			
		CURRENT_WEATHER : "Maintenant",
		HOURLY_WEATHER : "Prochaines heures",
		DAILY_WEATHER : "Prochains jours",
		LAT_LONG : 'Lon : {{LON}}, Lat : {{LAT}}',		
		CITY_NOT_FOUND : "Ville introuvable.",
		DATA_NOT_RECEIVED : "Erreur lors de la récupération des données<br/>Vérifier votre connexion internet.",
		CITY_NOT_SET : "Aucune ville selectionée.",
		CURRENT_CITY_SET : "Ville selectionée : {{CITY}}.",
		LIKE_OWM_CITY : "Cherchera la ville la plus proche.",
		ACCURATE_OWM_CITY : "Cherechera la ville exacte .",
		SETTINGS_CITY : "Utilisera la ville selectionnée.",
		AUTO_CITY : "Utilisera le wifi/GPS si disponible.",
		TEMP_UNIT_SELECTED : "Unité de température selectionnée  : {{UNIT}}.",
		SPEED_UNIT_SELECTED : "Unité de vitesse selectionnée : {{UNIT}}.",
		APP_LANG_LABEL_SELECTED : "Langue de l'application <br/>Actuel : {{LABEL_SETTING}}.",
		WEATHER_LANG_LABEL_SELECTED : "Langue de la météo provenant de OpenWeatherMap.<br/>Actuel : {{LABEL_SETTING}}.",
		MAX_DEFAULT_NUMBER_RESULT : "Utilisera le nombre maximum de résultat par défaut.",		
		MAX_SET_NUMBER_RESULT : "Nombre maximum par défaut si disponible : {{NUMBER}}.",	
	});
});
*/
yaoswa.run(['$location','$rootScope','HeaderSrvc', function($location,$rootScope,HeaderSrvc) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    	if (current.$$route !== undefined && current.$$route.title !== undefined) {
			HeaderSrvc.setHeaderTitle(current.$$route.title);        	
		}
		else
		{
			HeaderSrvc.setHeaderTitle("YAOSWA");
		}
    });
}]);

yaoswa.run(['$window','$rootScope','CordovaFact','SettingsSrvc', function($window,$rootScope,CordovaFact,SettingsSrvc) {
	$rootScope.startLoadingOverlay="none";	
	var appLanguageList=SettingsSrvc.APP_LANGUAGE;
	var weatherLanguageList=SettingsSrvc.WEATHER_LANGUAGE;
	
	if(!SettingsSrvc.isLanguageSet())
	{
		CordovaFact.getGlobalization().then(
			function(locale){

				var alternate_locale;
				var can_alternate=false;
				
				if(locale.indexOf("_") > -1)
				{
					can_alternate=true;
					alternate_locale=locale.split("_")[0];
				}
				
				var app_language_detect;
				var app_alternate_language_detect;
				
				var weather_language_detect;
				var weather_alternate_language_detect;
				
				var default_language_id;
				
				for(appLanguage in appLanguageList)	
				{
					if(locale==appLanguageList[appLanguage]["id"])
					{
						app_language_detect=appLanguageList[appLanguage]["id"];
					}
					if(can_alternate)
					{
						if(alternate_locale==appLanguageList[appLanguage]["id"])
						{
							app_alternate_language_detect=appLanguageList[appLanguage]["id"];				
						}
					}
				}
				
				for(weatherLanguage in weatherLanguageList)	
				{
					if(locale==weatherLanguageList[weatherLanguage]["id"])
					{
						weather_language_detect=weatherLanguageList[weatherLanguage]["id"];
					}
					if(can_alternate)
					{
						if(alternate_locale==weatherLanguageList[weatherLanguage]["id"])
						{
							weather_alternate_language_detect=weatherLanguageList[weatherLanguage]["id"];				
						}
					}
				}	
				weather_language_detect= weather_language_detect || weather_alternate_language_detect;
				app_language_detect= app_language_detect || app_alternate_language_detect;
				
				if(!weather_language_detect)
				{
					weather_language_detect=default_language_id;
				}
				if(!app_language_detect)
				{
					app_language_detect=default_language_id;
				}
				
				SettingsSrvc.setAppLanguageId(app_language_detect);
				SettingsSrvc.setWeatherLanguageId(weather_language_detect);

			},
			function(){							
				SettingsSrvc.setAppLanguageId(0);
				SettingsSrvc.setWeatherLanguageId(0);
			}
		);
	}
	else
	{
		var appLanguageID=SettingsSrvc.getAppLanguageId();
	}
}]);


 yaoswa.directive("myWeatherHeader", [ function() {
	return {
		restrict: "A",
			link: function($scope, element, attrs) {
				$scope.$watch(
				    function () { return $scope.getCityCountryTitle(); },
				    function (newValue, oldValue) {
				    	if (newValue !== oldValue) {
							$scope.headerTop=element[0].clientHeight + 5;
				    	}
				    }
				);
			}
		};
	}
]);
yaoswa.service('HeaderSrvc',['$rootScope', function($rootScope) {
	
    $rootScope.showBackButton = true;
    $rootScope.showAboutButton = true;
    $rootScope.showSettingsButton = true;
    $rootScope.showHeader = true;
   
	this.getHeaderTitle = function()
	{
		return $rootScope.headerTitle;
	};
	
	this.setHeaderTitle = function(title)
	{
		$rootScope.headerTitle=title;
	};
	
	
	this.getShowBackButton = function()
	{
		return $rootScope.showBackButton;
	};
	
	this.setShowBackButton = function(state)
	{
		$rootScope.showBackButton=state;
	};
	
	this.getShowAboutButton = function()
	{
		return $rootScope.showAboutButton;
	};
	
	this.setShowAboutButton = function(state)
	{
		$rootScope.showAboutButton=state;
	};
	
	this.getShowSettingsButton = function()
	{
		return $rootScope.showSettingsButton;
	};
	
	this.setShowSettingsButton = function(state)
	{
		$rootScope.showSettingsButton=state;
	};
	
	this.getShowHeader = function()
	{
		return $rootScope.showHeader;
	};
	
	this.setShowHeader = function(state)
	{
		$rootScope.showHeader=state;
	};
}]);

yaoswa.service('SettingsSrvc',[ function() {
	
    this.defaultCity="Limoges,FR";
    this.defaultIsAccurate=false;
    this.defaultIsGeolocate=false;
    this.defaultTempUnitId=0;
    this.defaultSpeedUnitId=0;
    this.defaultAppLanguageId=0;
    this.defaultWeatherLanguageId=0;
    this.defaultCnt=14;
    this.defaultLanguage="en";

	this.apiId = "26e1b3965e3ffa342a675e4b6b735832";
	
	this.UNIT_TEMP =[{
	  id: 0,
	  label: 'standard',
	  owm: 'standard',
	  label_setting: 'Kelvin (K)',
	  unit: 'K'
	}, {
	  id: 1,
	  label: 'imperial',
	  owm: 'imperial',
	  label_setting: 'Fahrenheit (°F)',
	  unit: '°F'
	}, {
	  id: 2,
	  label: 'metric',
	  owm: 'metric',
	  label_setting: 'Celsius (°C)',
	  unit: '°C'
	}];
		
	this.UNIT_SPEED =[{
	  id: 0,
	  label: 'meterspersecond',
	  label_setting: 'Meters per second (m/s)',	  
	  unit: 'm/s'
	}, {
	  id: 1,
	  label: 'kilometersperhour',
	  label_setting: 'Kilometers per hour (km/h)',	  
	  unit: 'km/h'
	}, {
	  id: 2,
	  label: 'milesperhour',
	  label_setting: 'Miles per hour (MpH)',	  
	  unit: 'MpH'
	}];	
	
	this.APP_LANGUAGE =[{
	  id: 0,
	  label: 'en',
	  label_setting: 'English'
	}, {
	  id: 1,
	  label: 'fr',
	  label_setting: 'Français'
	}];

	this.WEATHER_LANGUAGE =[{
	  id: 0,
	  label: 'en',
	  label_setting: 'English'
	}, {
	  id: 1,
	  label: 'fr',
	  label_setting: 'Français'
	}, {
	  id: 2,
	  label: 'ru',
	  label_setting: 'Русский'
	}, {
	  id: 3,
	  label: 'it',
	  label_setting: 'Italiano'
	}, {
	  id: 4,
	  label: 'sp',
	  label_setting: 'Español'
	}, {
	  id: 5,
	  label: 'ua',
	  label_setting: 'Українська'
	}, {
	  id: 6,
	  label: 'de',
	  label_setting: 'Deutsch'
	}, {
	  id: 7,
	  label: 'pt',
	  label_setting: 'Português'
	}, {
	  id: 8,
	  label: 'ro',
	  label_setting: 'Română'
	}, {
	  id: 9,
	  label: 'pl',
	  label_setting: 'Polski'
	}, {
	  id: 10,
	  label: 'fi',
	  label_setting: 'Suomi'
	}, {
	  id: 11,
	  label: 'nl',
	  label_setting: 'Nederlands'
	}, {
	  id: 12,
	  label: 'bg',
	  label_setting: 'български език'
	}, {
	  id: 13,
	  label: 'se',
	  label_setting: 'Svenska'
	}, {
	  id: 14,
	  label: 'zh_tw',
	  label_setting: '达伟'
	}, {
	  id: 15,
	  label: 'zh_cn',
	  label_setting: '汉语'
	}, {
	  id: 16,
	  label: 'tr',
	  label_setting: 'Türkçe'
	}, {
	  id: 17,
	  label: 'cz',
	  label_setting: 'Čeština'
	}, {
	  id: 18,
	  label: 'gl',
	  label_setting: 'Galego'
	}, {
	  id: 19,
	  label: 'vi',
	  label_setting: 'Tiếng Việt'
	}, {
	  id: 20,
	  label: 'ar',
	  label_setting: 'اللغة العربية'
	}, {
	  id: 21,
	  label: 'mk',
	  label_setting: 'Mакедонски'
	}, {
	  id: 22,
	  label: 'sk',
	  label_setting: 'Slovenčina'
	}];
		
	
	this.UNIT_PERC =[{
	  id: 0,
	  label: 'default',
	  unit: '%'
	}];
	
	this.UNIT_PRESSURE =[{
	  id: 0,
	  label: 'default',
	  unit: 'Hpa'
	}];
	
	this.UNIT_PRECIP =[{
	  id: 0,
	  label: 'millimeters',
	  unit: 'mm'
	}, {
	  id: 1,
	  label: 'inch',
	  unit: 'inch'
	}];	
	
	
	this.getCity= function()
	{
		return localStorage.getItem("city") || this.defaultCity;
	};
	this.setCity= function(city)
	{
		localStorage.setItem("city",city);
	};
	
	this.getIsAccurate= function()
	{
		if(localStorage.getItem("isAccurate"))
		{
			if(localStorage.getItem("isAccurate")=="true")
			{
				return true;
			}			
			else if(localStorage.getItem("isAccurate")=="false")
			{
				return false;
			}
			else
			{
				return  this.defaultIsAccurate;				
			}
		}
		else
		{
			return  this.defaultIsAccurate;
		}
	};
	this.setIsAccurate= function(isaccurate)
	{
		localStorage.setItem("isAccurate",isaccurate);
	};
	
	this.getIsGeolocate= function()
	{
		
		if(localStorage.getItem("isGeolocate"))
		{
			if(localStorage.getItem("isGeolocate")=="true")
			{
				return true;
			}			
			else if(localStorage.getItem("isGeolocate")=="false")
			{
				return false;
			}
			else
			{
				return  this.defaultIsGeolocate;				
			}
		}
		else
		{
			return  this.defaultIsGeolocate;
		}
	};
	this.setIsGeolocate= function(isgeolocate)
	{
		localStorage.setItem("isGeolocate",isgeolocate);
	};
	
	this.getTempUnitId= function()
	{
		return localStorage.getItem("tempunitid") || this.defaultTempUnitId;
	};
	this.setTempUnitId= function(tempunitid)
	{
		localStorage.setItem("tempunitid",tempunitid);
	};
	
	
	this.getSpeedUnitId= function()
	{
		return localStorage.getItem("speedunitid") || this.defaultSpeedUnitId;
	};
	this.setSpeedUnitId= function(speedunitid)
	{
		localStorage.setItem("speedunitid",speedunitid);
	};

	this.getAppLanguageId= function()
	{
		return localStorage.getItem("applanguageid") || this.defaultAppLanguageId;
	};
	this.setAppLanguageId= function(applanguageid)
	{
		localStorage.setItem("applanguageid",applanguageid);
	};

	this.getWeatherLanguageId= function()
	{
		return localStorage.getItem("weatherlanguageid") || this.defaultWeatherLanguageId;
	};
	this.setWeatherLanguageId= function(weatherlanguageid)
	{
		localStorage.setItem("weatherlanguageid",weatherlanguageid);
	};	
	
	this.isLanguageSet= function() {
		if(localStorage.getItem("applanguageid") == null || localStorage.getItem("weatherlanguageid") == null)
		{
			return false;
		}
		return true;
	};
	
	this.getCnt= function()
	{
		return localStorage.getItem("cnt") || this.defaultCnt;
	};
	this.setCnt= function(cnt)
	{
		localStorage.setItem("cnt",cnt);
	};
	
	this.getLanguage= function()
	{
		return localStorage.getItem("language") || this.defaultLanguage;
	};
	this.setLanguage= function(language)
	{
		localStorage.setItem("language",language);
	};
	
	this.getApiId= function()
	{
		return this.apiId;
	};
}]);

yaoswa.service('WeatherFact', ['UtilsSrvc','SettingsSrvc', function(UtilsSrvc,SettingsSrvc) {
	var WeatherFact = {
	    formatWeatherData: function(HTTPresponse,type_weather) {
		    console.log(HTTPresponse); 
		    
		        
			var weatherObj= new Object();
			var param= new Object();
			
			weatherObj.cod=HTTPresponse.cod;
			if(weatherObj.cod==404)
			{
				return weatherObj;
			}
			
			if(typeof(weatherObj.cod)=='undefined')
			{
				weatherObj.cod=500;
				return weatherObj;				
			}
		    
			var temp_unit_id=SettingsSrvc.getTempUnitId();
			var speed_unit_id=SettingsSrvc.getSpeedUnitId();
			
			weatherObj.percUnitLab=UtilsSrvc.getPercUnitLab();
			weatherObj.pressureUnitLab=UtilsSrvc.getPressureUnitLab();
			weatherObj.precUnitLab=UtilsSrvc.getPrecipUnitLab();
			weatherObj.tempUnitLab=UtilsSrvc.getTempUnitLab(temp_unit_id);
			weatherObj.speedUnitLab=UtilsSrvc.getSpeedUnitLab(speed_unit_id);
			
			if(type_weather==0)
			{										
				weatherObj.dt=HTTPresponse.dt*1000;
				weatherObj.city=HTTPresponse.name;
				
				if(typeof(HTTPresponse.coord) !== "undefined")
				{
					weatherObj.lon=HTTPresponse.coord.lon;
					weatherObj.lat=HTTPresponse.coord.lat;
				}
				
				if(typeof(HTTPresponse.sys) !== "undefined")
				{
					weatherObj.country=HTTPresponse.sys.country;	
					weatherObj.sunrise=HTTPresponse.sys.sunrise*1000;
					weatherObj.sunset=HTTPresponse.sys.sunset*1000;
					weatherObj.pod="d";
					
					var dt_date = new Date(weatherObj.dt*1000);
					var sunrise_date = new Date(weatherObj.sunrise*1000);
					var sunset_date = new Date(weatherObj.sunset);
					if(dt_date<=sunrise_date && sunset_date <= dt_date)
					{
						weatherObj.pod="n";
					}
				}
				
				
				if(typeof(HTTPresponse.main) !== "undefined")
				{
					weatherObj.temp=HTTPresponse.main.temp;
					weatherObj.temp_min=HTTPresponse.main.temp_min;
					weatherObj.temp_max=HTTPresponse.main.temp_max;
					weatherObj.pressure=HTTPresponse.main.pressure;
					weatherObj.humidity=HTTPresponse.main.humidity;
				}
				
				if(typeof(HTTPresponse.weather) !== "undefined")
				{
					weatherObj.description=HTTPresponse.weather[0].description;
					weatherObj.weather_id=HTTPresponse.weather[0].id;						
					weatherObj.customInfo=UtilsSrvc.getCustomWeatherInfo(weatherObj.weather_id,weatherObj.pod);	
					if(typeof(weatherObj.customInfo.description) !== "undefined" )
					{
						weatherObj.description=weatherObj.customInfo.description;						
					}
				}				
				
				if(typeof(HTTPresponse.clouds) !== "undefined")
				{
					weatherObj.clouds=HTTPresponse.clouds["1h"] || HTTPresponse.clouds["3h"] || HTTPresponse.clouds["all"] || 0;				
				}
				if(typeof(HTTPresponse.rain) !== "undefined")
				{
					weatherObj.rain=HTTPresponse.rain["1h"] || HTTPresponse.rain["3h"] || HTTPresponse.rain["all"] || null;				
				}
				if(typeof(HTTPresponse.snow) !== "undefined")
				{
					weatherObj.snow=HTTPresponse.snow["1h"] || HTTPresponse.snow["3h"] || HTTPresponse.snow["all"] || null;			
				}
				if(typeof(HTTPresponse.wind) !== "undefined")
				{
					weatherObj.wind_deg=HTTPresponse.wind.deg;
					weatherObj.wind_orient=UtilsSrvc.getOrientationFromDegree(weatherObj.wind_deg);
					
					weatherObj.wind_gust=UtilsSrvc.getSpeedData(temp_unit_id,speed_unit_id,HTTPresponse.wind.gust);
					weatherObj.wind_speed=UtilsSrvc.getSpeedData(temp_unit_id,speed_unit_id,HTTPresponse.wind.speed);	
				}
			}
			if(type_weather==1)
			{
				if(typeof(HTTPresponse.city) !== "undefined")
				{					
					weatherObj.city=HTTPresponse.city.name;
					weatherObj.country=HTTPresponse.city.country;
					
					if(typeof(HTTPresponse.city.coord) !== "undefined")
					{
						weatherObj.lon=HTTPresponse.city.coord.lon;
						weatherObj.lat=HTTPresponse.city.coord.lat;
					}
				}
				
				
				
				if(typeof(HTTPresponse.list) !== "undefined")
				{
					weatherObj.list=new Array();			
					for(var i in HTTPresponse.list)
					{
						weatherObj.list[i]=new Object();
						weatherObj.list[i].dt=HTTPresponse.list[i].dt*1000;
						weatherObj.list[i].description=HTTPresponse.list[i].description;
						
						if(typeof(HTTPresponse.list[i].clouds) !== "undefined")
						{
							weatherObj.list[i].clouds=HTTPresponse.list[i].clouds["1h"] || HTTPresponse.list[i].clouds["3h"] || HTTPresponse.list[i].clouds["all"] || 0;				
						}
						
						if(typeof(HTTPresponse.list[i].main) !== "undefined")
						{
							weatherObj.list[i].temp=HTTPresponse.list[i].main.temp;
							weatherObj.list[i].temp_min=HTTPresponse.list[i].main.temp_min;
							weatherObj.list[i].temp_max=HTTPresponse.list[i].main.temp_max;
							weatherObj.list[i].pressure=HTTPresponse.list[i].main.pressure;
							weatherObj.list[i].humidity=HTTPresponse.list[i].main.humidity;
						}
						
						if(typeof(HTTPresponse.list[i].sys) !== "undefined")
						{
							weatherObj.list[i].pod=HTTPresponse.list[i].sys.pod || "u";
						}
						
						if(typeof(HTTPresponse.list[i].weather) !== "undefined")
						{
							weatherObj.list[i].description=HTTPresponse.list[i].weather[0].description;
							weatherObj.list[i].weather_id=HTTPresponse.list[i].weather[0].id;	
							weatherObj.list[i].customInfo=UtilsSrvc.getCustomWeatherInfo(weatherObj.list[i].weather_id,weatherObj.list[i].pod);	
						
							if(typeof(weatherObj.list[i].customInfo.description) !== "undefined" )
							{
								weatherObj.list[i].description=weatherObj.list[i].customInfo.description;						
							}
						}
						
						if(typeof(HTTPresponse.list[i].rain) !== "undefined")
						{
							weatherObj.list[i].rain=HTTPresponse.list[i].rain["1h"] || HTTPresponse.list[i].rain["3h"] || HTTPresponse.list[i].rain["all"] || null;				
						}
						if(typeof(HTTPresponse.list[i].snow) !== "undefined")
						{
							weatherObj.list[i].snow=HTTPresponse.list[i].snow["1h"] || HTTPresponse.list[i].snow["3h"] || HTTPresponse.list[i].snow["all"] || null;			
						}
						if(typeof(HTTPresponse.list[i].wind) !== "undefined")
						{				
							weatherObj.list[i].wind_deg=HTTPresponse.list[i].wind.deg;
							weatherObj.list[i].wind_orient=UtilsSrvc.getOrientationFromDegree(weatherObj.list[i].wind_deg);					
							
							weatherObj.list[i].wind_speed=UtilsSrvc.getSpeedData(temp_unit_id,speed_unit_id,HTTPresponse.list[i].wind.speed);
							weatherObj.list[i].wind_gust=UtilsSrvc.getSpeedData(temp_unit_id,speed_unit_id,HTTPresponse.list[i].wind.gust);						
									
						}
					}
				}				
			}		
			if(type_weather==2)
			{
				if(typeof(HTTPresponse.city) !== "undefined")
				{					
					weatherObj.city=HTTPresponse.city.name;
					weatherObj.country=HTTPresponse.city.country;
					if(typeof(HTTPresponse.city.coord) !== "undefined")
					{
						weatherObj.lon=HTTPresponse.city.coord.lon;
						weatherObj.lat=HTTPresponse.city.coord.lat;
					}
				}
				
				if(typeof(HTTPresponse.list) !== "undefined")
				{
					weatherObj.list=new Array();			
					for(var i in HTTPresponse.list)
					{
						weatherObj.list[i]=new Object();
						weatherObj.list[i].dt=HTTPresponse.list[i].dt*1000;
						weatherObj.list[i].description=HTTPresponse.list[i].description;						
						
						
						
						if(typeof(HTTPresponse.list[i].temp) !== "undefined")
						{
							weatherObj.list[i].temp=HTTPresponse.list[i].temp.day;
							weatherObj.list[i].temp_min=HTTPresponse.list[i].temp.min;
							weatherObj.list[i].temp_max=HTTPresponse.list[i].temp.max;
						}
						
						if(typeof(HTTPresponse.list[i].sys) !== "undefined")
						{
							weatherObj.list[i].pod="d";
						}
						
						if(typeof(HTTPresponse.list[i].weather) !== "undefined")
						{
							weatherObj.list[i].description=HTTPresponse.list[i].weather[0].description;
							weatherObj.list[i].weather_id=HTTPresponse.list[i].weather[0].id;	
							weatherObj.list[i].customInfo=UtilsSrvc.getCustomWeatherInfo(weatherObj.list[i].weather_id,weatherObj.list[i].pod);	
							
							if(typeof(weatherObj.list[i].customInfo.description) !== "undefined" )
							{
								weatherObj.list[i].description=weatherObj.list[i].customInfo.description;						
							}
							
						}
						weatherObj.list[i].clouds=HTTPresponse.list[i].clouds;				
						weatherObj.list[i].pressure=HTTPresponse.list[i].pressure;
						weatherObj.list[i].humidity=HTTPresponse.list[i].humidity;		
						weatherObj.list[i].rain=HTTPresponse.list[i].rain;
						weatherObj.list[i].snow=HTTPresponse.list[i].snow;
						weatherObj.list[i].wind_deg=HTTPresponse.list[i].deg;
						weatherObj.list[i].wind_orient=UtilsSrvc.getOrientationFromDegree(weatherObj.list[i].wind_deg);
						
						weatherObj.list[i].wind_gust=UtilsSrvc.getSpeedData(speed_unit_id,HTTPresponse.list[i].gust);
						weatherObj.list[i].wind_speed=UtilsSrvc.getSpeedData(speed_unit_id,HTTPresponse.list[i].wind_speed);						
					}
				}				
			}		
		    console.log(weatherObj);     
			return weatherObj;
	    }
	};
	
	return WeatherFact;
}]);	


yaoswa.factory('CordovaFact', ['$window','$q','$http', function($window,$q,$http) {	
	
	return {
		getGeolocation : function() {
			var options = {
			  timeout: 60000,
			  maximumAge: 100000
			};
			var geolocation = $window.navigator.geolocation;
			var deferred = $q.defer();		
			if(typeof(geolocation)!='undefined')
			{
				geolocation.getCurrentPosition(
					function(position)
					{
						deferred.resolve(position);
					},
					function(error)
					{
						deferred.reject(null);				
					},
					options		
				);
			}
			else
			{
				deferred.reject(null);	
			}
			return deferred.promise;
		},
		getGlobalization : function() {			
			var globalization = $window.navigator.globalization;
			var deferred = $q.defer();
			if(typeof(globalization)!='undefined')
			{
				globalization.getLocaleName(
					function(language)
					{
						deferred.resolve(language);
					},
					function()
					{
						deferred.reject(null);				
					}		
				);
			}
			else
			{
				deferred.reject(null);	
			}
			return deferred.promise;
		}
	};	
}]);

yaoswa.service('WeatherSrvc', ['SettingsSrvc','CordovaFact','$http','$q', function(SettingsSrvc,CordovaFact,$http,$q) {	
	this.getWeatherParam = function() {
		var param = new Object();
		param.location = SettingsSrvc.getCity();
		param.accurate = SettingsSrvc.getIsAccurate();
		param.geolocate = SettingsSrvc.getIsGeolocate();
		param.tempUnit = SettingsSrvc.UNIT_TEMP[SettingsSrvc.getTempUnitId()].owm;
		param.cnt = SettingsSrvc.getCnt();
		param.apiId = SettingsSrvc.getApiId();		
		param.lang = SettingsSrvc.WEATHER_LANGUAGE[SettingsSrvc.getWeatherLanguageId()].label;
		
		if(param.accurate==true)
		{
			param.type="accurate";
		}
		else
		{
			param.type = "like";			
		}
		return param;
	};
	this.getCurrentWeather = function() {
		var param=this.getWeatherParam();
		var base_current_weather_url="http://api.openweathermap.org/data/2.5/weather?";		
		
		var current_weather_url_not_geo="q="+escape(param.location);
		var current_weather_url_geo="lat=%lat%&lon=%lon%";
		
		var current_weather_end_url="&units="+param.tempUnit;
		current_weather_end_url+="&type="+param.type;
		current_weather_end_url+="&lang="+param.lang;		
		current_weather_end_url+="&APPID="+param.apiId;	
				
	 	var request_return;
	 	
	 	if(param.geolocate)
	 	{
			request_return = CordovaFact.getGeolocation().then(
	 			function(position)
	 			{
	 				current_weather_url_geo=current_weather_url_geo.replace('%lat%',position.coords.latitude).replace('%lon%',position.coords.longitude);
	 				return $http.get(base_current_weather_url+current_weather_url_geo+current_weather_end_url);		 				
	 			},
	 			function()
	 			{	 				
	 				return $http.get(base_current_weather_url+current_weather_url_not_geo+current_weather_end_url);	
	 			}
	 		);
	 	}
	 	else
	 	{
	 		request_return=$http.get(base_current_weather_url+current_weather_url_not_geo+current_weather_end_url);		
	 	}
		return request_return;
		
	};
	this.getHourlyForecastWeather = function() {
		
		var param=this.getWeatherParam();
	 	var base_hourly_weather_url="http://api.openweathermap.org/data/2.5/forecast/hourly?";
		
		var hourly_weather_url_not_geo="q="+param.location;
		var hourly_weather_url_geo="lat=%lat%&lon=%lon%";
		
		var hourly_weather_end_url="&units="+escape(param.tempUnit);
		hourly_weather_end_url+="&type="+param.type;
		hourly_weather_end_url+="&lang="+param.lang;		
		hourly_weather_end_url+="&cnt="+escape(param.cnt);
		hourly_weather_end_url+="&APPID="+param.apiId;	
				
	 	var request_return;
	 	
	 	if(param.geolocate)
	 	{
			request_return = CordovaFact.getGeolocation().then(
	 			function(position)
	 			{
	 				hourly_weather_url_geo=hourly_weather_url_geo.replace('%lat%',position.coords.latitude).replace('%lon%',position.coords.longitude);
	 				return $http.get(base_hourly_weather_url+hourly_weather_url_geo+hourly_weather_end_url);		 				
	 			},
	 			function()
	 			{	 				
	 				return $http.get(base_hourly_weather_url+hourly_weather_url_not_geo+hourly_weather_end_url);	
	 			}
	 		);
	 	}
	 	else
	 	{
	 		request_return=$http.get(base_hourly_weather_url+hourly_weather_url_not_geo+hourly_weather_end_url);		
	 		
	 	}
		return request_return;
	 	
	};
	
	this.getDailyForecastWeather = function() {
		
		var param=this.getWeatherParam();
	 	var base_daily_weather_url="http://api.openweathermap.org/data/2.5/forecast/daily?";
		
		var daily_weather_url_not_geo="q="+escape(param.location);
		var daily_weather_url_geo="lat=%lat%&lon=%lon%";
		
		var daily_weather_end_url="&units="+param.tempUnit;
		daily_weather_end_url+="&type="+param.type;
		daily_weather_end_url+="&lang="+param.lang;			
		daily_weather_end_url+="&cnt="+escape(param.cnt);
		daily_weather_end_url+="&APPID="+param.apiId;
				
	 	var request_return;
	 	
	 	if(param.geolocate)
	 	{
			request_return = CordovaFact.getGeolocation().then(
	 			function(position)
	 			{
	 				daily_weather_url_geo=daily_weather_url_geo.replace('%lat%',position.coords.latitude).replace('%lon%',position.coords.longitude);
	 				return $http.get(base_daily_weather_url+daily_weather_url_geo+daily_weather_end_url);		 				
	 			},
	 			function()
	 			{	 				
	 				return $http.get(base_daily_weather_url+daily_weather_url_not_geo+daily_weather_end_url);	
	 			}
	 		);
	 	}
	 	else
	 	{
	 		request_return=$http.get(base_daily_weather_url+daily_weather_url_not_geo+daily_weather_end_url);		
	 		
	 	}
		return request_return;
	};	
}]);


yaoswa.service('UtilsSrvc', [ 'SettingsSrvc', function(SettingsSrvc) {	
	var mpstokph=3.6;
	var mpstomilesph=2.23693629;
	var milesphtomps=0.44704;
	var mmtoin=0.0393700787;
		
	
	 
	this.mpsToKph = function(mps)
	{
		return mps*mpstokph;
	};
	
	this.mpsToMilesph = function(mps)
	{
		return mps*mpstomilesph;
	};
	
	this.mmToIn = function(mm)
	{
		return Math.round(mm*mmtoin);
	};
	
	this.getPercUnitLab = function()
	{		
        return SettingsSrvc.UNIT_PERC[0].unit;
	};	
	this.getPrecipUnitLab = function()
	{
        return SettingsSrvc.UNIT_PRECIP[0].unit;
	};	
	
	this.getPressureUnitLab = function()
	{
        return SettingsSrvc.UNIT_PRESSURE[0].unit;
	};	
	
	this.getSpeedUnitLab = function(speed_unit_id)
	{
        return SettingsSrvc.UNIT_SPEED[speed_unit_id].unit;
	};	
	this.getTempUnitLab = function(temp_unit_id)
	{
        return SettingsSrvc.UNIT_TEMP[temp_unit_id].unit;
	};	
	
	this.getSpeedData = function(temp_unit_id,speed_unit_id,speed_data)
	{
		temp_unit_id = temp_unit_id || 0 ;
		speed_unit_id = speed_unit_id || 0 ;
		speed_data = speed_data || 0 ;		
		var speed=0;
		
		if(temp_unit_id == 0 || temp_unit_id == 2)
		{
			speed_data=this.convertmphtoms(speed_data);
		}
        if(speed_unit_id==0)
		{
        	speed=speed_data;
		}
        else if (speed_unit_id==1)
        {
        	speed=this.mpsToKph(speed_data);
		}
        else if (speed_unit_id==2)
        {
        	speed=this.mpsToMilesph(speed_data);
        } 
        
        return speed;
	};	
	
	this.convertmphtoms = function(speed_data)
	{
    	return speed_data*milesphtomps ;
	};
	
	this.getPrecipData = function(precip_unit_id,precip_data)
	{
		precip_unit_id=precip_unit_id||0;
		var precip=0;
        if(precip_unit_id==0)
		{
        	precip=precip_data;
		}
        else if (precip_unit_id==1)
        {
        	precip=this.mmToIn(precip_data);
		}
        
        return precip;
	};
	
	
	this.getOrientationFromDegree = function(degree)
	{
		var orient ="N/A";
		
		
		if((degree>=348.75 && degree<=380) || ((degree>=0 && degree<=11.25)))
		{
			orient="N";
		}
		else if (degree>=11.25 && degree<=33.75)
		{
			orient="NNE";
		}
		else if (degree>=33.75 && degree<=56.25)
		{
			orient="NE";
		}
		else if (degree>=56.25 && degree<=78.75)
		{
			orient="ENE";
		}
		else if (degree>=78.75 && degree<=101.25)
		{
			orient="E";
		}
		else if (degree>=101.25 && degree<=123.75)
		{
			orient="ESE";
		}
		else if (degree>=123.75 && degree<=146.25)
		{
			orient="SE";
		}
		else if (degree>=146.25 && degree<=168.75)
		{
			orient="SSE";
		}
		else if (degree>=168.75 && degree<=191.25)
		{
			orient="S";
		}
		else if (degree>=191.25 && degree<=213.75)
		{
			orient="SSW";
		}
		else if (degree>=213.75 && degree<=236.25)
		{
			orient="SW";
		}
		else if (degree>=236.25 && degree<=258.75)
		{
			orient="WSW";
		}
		else if (degree>=258.75 && degree<=281.25)
		{
			orient="W";
		}
		else if (degree>=281.25 && degree<=303.75)
		{
			orient="WNW";
		}
		else if (degree>=303.75 && degree<=326.25)
		{
			orient="NW";
		}
		else
		{
			orient="NNW";
		}
		return orient;
	};
	
	this.isOnline = function()
	{
	    return window.navigator.onLine;
	};
		
	
	this.getCustomWeatherInfo = function(code,pod) {
		code = typeof code !== 'undefined' ? code : 801;
  		pod = typeof pod !== 'undefined' ? pod : "d"; 		
  		
		var color_black="#000000";
		var color_blue="#55AAFF";
		var color_gray="#808080";
		var color_yellow="#E0B000";
		var color_night="#41403b";
		var root_image = "img/weather_icon/";
		var root_image_animate = "img/weather_icon_animate/";
		
		
		var image_cloud=root_image_animate+"icon_weather_cloud.svg";
		var image_hard_cloud=root_image_animate+"icon_weather_hard_cloud.svg";
		var image_mist=root_image_animate+"icon_weather_mist.svg";
		var image_rain=root_image_animate+"icon_weather_rain.svg";
		var image_drizzle=root_image_animate+"icon_weather_rainy.svg";
		var image_snow=root_image+"icon_weather_snow.svg";
		var image_snowy=root_image_animate+"icon_weather_snowy.svg";
		var image_moon_cloud=root_image_animate+"icon_weather_sun_cloud_night.svg";
		var image_sun_cloud=root_image_animate+"icon_weather_sun_cloud.svg";
		var image_moon=root_image_animate+"icon_weather_sun_night.svg";
		var image_sun=root_image_animate+"icon_weather_sun.svg";
		var image_thunderstorm=root_image_animate+"icon_weather_thunderstorm.svg";
		
		
		var color = color_black;
		var image = image_cloud;
		
		var day_status = "day";
		var isNight = false;
		
		
		if(pod=="n")
		{
			isNight =true;
			day_status = "night";				
		}
		
		
		
		//thunderstorm
		if(code==200)
		{
			color=color_black;
			image=image_thunderstorm;
		}
		else if(code==201)
		{
			color=color_black;
			image=image_thunderstorm;
		}
		else if(code==202)
		{
			color=color_black;
			image=image_thunderstorm;
		}
		else if(code==210)
		{
			color=color_black;
			image=image_thunderstorm;
		}
		else if(code==211)
		{
			color=color_black;
			image=image_thunderstorm;
		}
		else if(code==212)
		{
			color=color_black;
			image=image_thunderstorm;
		}
		else if(code==221)
		{
			color=color_black;
			image=image_thunderstorm;
		}
		else if(code==230)
		{
			color=color_black;
			image=image_thunderstorm;
		}
		else if(code==231)
		{
			color=color_black;
			image=image_thunderstorm;
		}
		else if(code==232)
		{
			color=color_black;
			image=image_thunderstorm;
		}
		
		//drizzle
		else if(code==300)
		{
			color=color_blue;
			image=image_drizzle;
		}
		else if(code==301)
		{
			color=color_blue;
			image=image_drizzle;
		}
		else if(code==302)
		{
			color=color_blue;
			image=image_drizzle;
		}
		else if(code==310)
		{
			color=color_blue;
			image=image_drizzle;
		}
		else if(code==311)
		{
			color=color_blue;
			image=image_drizzle;
		}
		else if(code==312)
		{
			color=color_blue;
			image=image_drizzle;
		}
		else if(code==321)
		{
			color=color_blue;
			image=image_drizzle;
		}
		
		//rain
		else if(code==500)
		{
			color=color_blue;
			image=image_rain;
		}
		else if(code==501)
		{
			color=color_blue;
			image=image_rain;
		}
		else if(code==502)
		{
			color=color_blue;
			image=image_rain;
		}
		else if(code==503)
		{
			color=color_blue;
			image=image_rain;
		}
		else if(code==504)
		{
			color=color_blue;
			image=image_rain;
		}
		else if(code==511)
		{
			color=color_blue;
			image=image_snow;
		}
		else if(code==520)
		{
			color=color_blue;
			image=image_drizzle;
		}
		else if(code==521)
		{
			color=color_blue;
			image=image_drizzle;
		}
		else if(code==522)
		{
			color=color_blue;
			image=image_drizzle;
		}
		else if(code==531)
		{
			color=color_blue;
			image=image_drizzle;
		}
		
		//Snow
		else if(code==600)
		{
			color=color_blue;
			image=image_snow;
		}
		else if(code==601)
		{
			color=color_blue;
			image=image_snow;
		}
		else if(code==602)
		{
			color=color_blue;
			image=image_snow;
		}
		else if(code==611)
		{
			color=color_blue;
			image=image_snow;
		}
		else if(code==621)
		{
			color=color_blue;
			image=image_snow;
		}
		
		//Atmosphere
		else if(code==701)
		{
			color=color_gray;
			image=image_mist;
		}
		else if(code==711)
		{
			color=color_gray;
			image=image_mist;
		}
		else if(code==721)
		{
			color=color_gray;
			image=image_mist;
		}
		else if(code==731)
		{
			color=color_gray;
			image=image_mist;
		}
		else if(code==741)
		{
			color=color_gray;
			image=image_mist;
		}
		else if(code==751)
		{
			color=color_gray;
			image=image_mist;
		}
		else if(code==761)
		{
			color=color_gray;
			image=image_mist;
		}
		else if(code==762)
		{
			color=color_gray;
			image=image_mist;
		}
		else if(code==771)
		{
			color=color_gray;
			image=image_mist;
		}
		else if(code==781)
		{
			color=color_gray;
			image=image_mist;
		}

		//cloud
		else if(code==800)
		{
			color=color_yellow;
			image=image_sun;
			if(isNight)
			{
				image=image_moon;
				description="Starry sky";
			}
		
		}
		else if(code==801)
		{
			color=color_yellow;
			image=image_sun_cloud;
			if(isNight)
			{
				image=image_moon_cloud;
				description="Partly starry sky";
			}
		}
		else if(code==802)
		{
			color=color_gray;
			image=image_cloud;
		}
		else if(code==803)
		{
			color=color_gray;
			image=image_hard_cloud;
		}
		else if(code==804)
		{
			color=color_gray;
			image=image_hard_cloud;
		}
		
		//extreme
		else if(code==900)
		{
			color=color_black;
			image=image_thunderstorm;
		}
		else if(code==901)
		{
			color=color_black;
			image=image_thunderstorm;
		}
		else if(code==902)
		{
			color=color_black;
			image=image_thunderstorm;
		}
		else if(code==903)
		{
			color=color_black;
			image=image_thunderstorm;
		}
		else if(code==904)
		{
			color=color_black;
			image=image_thunderstorm;
		}
		else if(code==905)
		{
			color=color_black;
			image=image_thunderstorm;
		}		
		else if(code==906)
		{
			color=color_black;
			image=image_thunderstorm;
		}
		
		//TODO
		//additional
		else if(code==950)
		{
		}
		else if(code==951)
		{
		}
		else if(code==952)
		{
		}
		else if(code==953)
		{
		}
		else if(code==954)
		{
		}
		else if(code==955)
		{
		}
		else if(code==956)
		{
		}
		else if(code==957)
		{
		}
		else if(code==958)
		{
		}
		else if(code==959)
		{
		}
		else if(code==960)
		{
		}
		else if(code==961)
		{
		}
		else if(code==962)
		{
		}
		
		if(typeof(description) !== "undefined")
		{
			return {"color": color, "image": image,"description": description,"isNight": isNight,"day_status": day_status};			
		}
		return {"color": color, "image": image,"isNight": isNight,"day_status": day_status};
	};
}]);	

yaoswa.controller('HeaderCtrl',['$scope','HeaderSrvc','$timeout', function ($scope,HeaderSrvc,$timeout) 
{ 
	$scope.getHeaderTitle= HeaderSrvc.getHeaderTitle;
	$scope.getShowBackButton= HeaderSrvc.getShowBackButton;
	$scope.getShowSettingsButton= HeaderSrvc.getShowSettingsButton;
	$scope.getShowAboutButton= HeaderSrvc.getShowAboutButton;
	$scope.getShowHeader= HeaderSrvc.getShowHeader;
	
	$scope.getBackButtonClass = function() {		
		if($scope.getShowBackButton())
		{
			return "";
		}
		else
		{		
			return "header_no_back_button";
		}		
	};
	/*
	$scope.headerTitle="YAOSWA";
	$scope.backUrl=null;
	$scope.showAboutButtton=true;
	$scope.showSettingButtton=true;
	
	*/
	
	
}]);

yaoswa.controller('HomeCtrl',['WeatherSrvc','HeaderSrvc','WeatherFact','$scope',
function (WeatherSrvc,HeaderSrvc,WeatherFact,$scope) {
	var weather_title=new Array("Current Weather", "Hourly Weather", "Daily Weather");
	$scope.loaderOverlay=false;
	HeaderSrvc.setShowBackButton(false);
	
	$scope.activeTab=0;
	$scope.maxTab=2;
	$scope.minTab=0;
	$scope.weather_header_title=weather_title[0];
	$scope.city_header_title='';
	$scope.country_header_title='';
	$scope.lon_header_title='';
	$scope.lat_header_title='';
	$scope.lazyLoadCache=0;
	$scope.headerTop=0;
				
	$scope.getCityCountryTitle =  function() {
		if($scope.city_header_title && $scope.country_header_title)
		{
			return $scope.city_header_title +' / '+ $scope.country_header_title;
		}
		else if ($scope.city_header_title)
		{
			return $scope.city_header_title;
		}
		else if($scope.lon_header_title && $scope.lat_header_title)
		{
			return 'Lon : '+$scope.lon_header_title +' ,Lat : '+ $scope.lat_header_title;			
		}
		else
		{
			return null;
		}

	};
	
	$scope.isMinTab =  function() {
		if($scope.activeTab==$scope.minTab)
		{
			return true;
		}		
		return false;
	};
	
	$scope.isMaxTab =  function() {
		if($scope.activeTab==$scope.maxTab)
		{
			return true;
		}		
		return false;
	};
		
	$scope.nextTab =  function() {
		$scope.activeTab++;
		$scope.loadWeather($scope.activeTab);
		$scope.weather_header_title=weather_title[$scope.activeTab];
	};
	$scope.prevTab =  function() {		
		$scope.activeTab--;
		$scope.loadWeather($scope.activeTab);
		$scope.weather_header_title=weather_title[$scope.activeTab];
	};
	
	$scope.isActiveTab = function(index) {
		if($scope.activeTab==index)
		{
			return true;
		}		
		return false;
	};
	
	$scope.isReadyTab = function(index) {
		if($scope.activeTab==index && $scope.loaderOverlay==false)
		{
			return true;
		}		
		return false;
	};		
	
	$scope.getHeaderHeight = function() {
		return $scope.headerTop;
	};	
	
	$scope.toggleWeatherDetail = function($event) {
		var target = angular.element($event.currentTarget);
		if(!target.hasClass("show_weather_detail"))
		{
			target.addClass("show_weather_detail");
		}
		else
		{
			target.removeClass("show_weather_detail");			
		}
	};	
	
	$scope.errorOverlay = function() {
		var weather_test;
		if(typeof($scope.currentWeather)!= "undefined")
		{
			weather_test=$scope.currentWeather;
		}
		else if	(typeof($scope.hourlyWeather)!= "undefined")
		{
			weather_test=$scope.hourlyWeather;
		}
		else if(typeof($scope.dailyWeather)!= "undefined")
		{
			weather_test=$scope.dailyWeather;
		}
		if(typeof(weather_test)!= "undefined")
		{
			if(weather_test.cod == 404)
			{
					$scope.errorOverlaymsg="Ville introuvable.";
					return true;			
			}
			else if(weather_test.cod == 500)
			{
					$scope.errorOverlaymsg="Erreur lors de la récupération des données<br/>Vérifier votre connexion internet.";
					return true;			
			}
		}
		return false;
	};
	
	$scope.refresh = function() {
		$scope.weather_header_title=weather_title[$scope.activeTab];
		$scope.loadWeather($scope.activeTab);		
	};
	
	$scope.loadDisplayedWeather = function(type_weather) {		
		$scope.currentWeather=undefined;
		$scope.hourlyWeather=undefined;
		$scope.dailyWeather=undefined;	
		switch (type_weather)
		{
			case 0 :				
				$scope.currentWeather=$scope.currentWeatherLoaded;			
			break;
			case 1 :	        
				$scope.hourlyWeather=$scope.hourlyWeatherLoaded;
			break;
			case 2 :	
				$scope.dailyWeather=$scope.dailyWeatherLoaded;
			break;	
		}
		$scope.lazyLoadCache=(new Date()).getTime();
	};
		
	$scope.loadWeather = function(type_weather) {
		$scope.imgsrcoverlay='img/application_icon/loader_animate.svg?lazyload='+$scope.lazyLoadCache;
		$scope.loaderOverlay=true;
		switch (type_weather)
		{
			case 0 :			
		        WeatherSrvc.getCurrentWeather().then(function(response) { 
			        var weatherObj= WeatherFact.formatWeatherData(response.data,type_weather);
					$scope.city_header_title=weatherObj.city;
					$scope.country_header_title=weatherObj.country;
					$scope.lon_header_title=weatherObj.lon;
					$scope.lat_header_title=weatherObj.lat;
					$scope.currentWeatherLoaded=weatherObj;
					$scope.loadDisplayedWeather(0);	
					$scope.loaderOverlay=false;	
		        },
		        function(response) {     
			        var weatherObj= new Object();
			        weatherObj.cod=500;
					$scope.currentWeatherLoaded=weatherObj;
					$scope.loadDisplayedWeather(0);	
					$scope.loaderOverlay=false;	
		        });
			break;
			case 1 :	
		        WeatherSrvc.getHourlyForecastWeather().then(function(response) { 
			        var weatherObj= WeatherFact.formatWeatherData(response.data,type_weather);
					$scope.city_header_title=weatherObj.city;
					$scope.country_header_title=weatherObj.country;
					$scope.lon_header_title=weatherObj.lon;
					$scope.lat_header_title=weatherObj.lat;
					$scope.hourlyWeatherLoaded=weatherObj;
					$scope.loadDisplayedWeather(1);	
					$scope.loaderOverlay=false;	
		        },
		        function(response) {     
			        var weatherObj= new Object();
			        weatherObj.cod=500;
					$scope.hourlyWeatherLoaded=weatherObj;
					$scope.loadDisplayedWeather(1);	
					$scope.loaderOverlay=false;	
		        });		        
			break;
			case 2 :	
		        WeatherSrvc.getDailyForecastWeather().then(function(response) { 
			        var weatherObj= WeatherFact.formatWeatherData(response.data,type_weather);
					$scope.city_header_title=weatherObj.city;
					$scope.country_header_title=weatherObj.country;
					$scope.lon_header_title=weatherObj.lon;
					$scope.lat_header_title=weatherObj.lat;
					$scope.dailyWeatherLoaded=weatherObj;
					$scope.loadDisplayedWeather(2);	
					$scope.loaderOverlay=false;	
		        },
		        function(response) {     
			        var weatherObj= new Object();
			        weatherObj.cod=500;
					$scope.dailyWeatherLoaded=weatherObj;
					$scope.loadDisplayedWeather(2);	
					$scope.loaderOverlay=false;	
		        });	
			break;
		}
	};
	
	
	$scope.weather_header_title=weather_title[$scope.activeTab];
	$scope.loadWeather($scope.activeTab);
	
	
	
}]);

yaoswa.controller('AboutCtrl',['HeaderSrvc','$scope', function (HeaderSrvc,$scope) {
	HeaderSrvc.setShowBackButton(true);
}]);

yaoswa.controller('SettingCtrl',['HeaderSrvc','SettingsSrvc','$scope','$location', function (HeaderSrvc,SettingsSrvc,$scope,$location) {
	HeaderSrvc.setShowBackButton(true);
			
	$scope.city=SettingsSrvc.getCity();
	$scope.accurate=SettingsSrvc.getIsAccurate();
	$scope.geolocate=SettingsSrvc.getIsGeolocate();
	$scope.nbCnt=SettingsSrvc.getCnt();
	
	$scope.tempList=SettingsSrvc.UNIT_TEMP;
	$scope.speedList=SettingsSrvc.UNIT_SPEED;
	$scope.appLanguageList=SettingsSrvc.APP_LANGUAGE;
	$scope.weatherLanguageList=SettingsSrvc.WEATHER_LANGUAGE;
	$scope.tempUnitId=SettingsSrvc.UNIT_TEMP[SettingsSrvc.getTempUnitId()];
	$scope.speedUnitId=SettingsSrvc.UNIT_SPEED[SettingsSrvc.getSpeedUnitId()];
	$scope.appLanguageId=SettingsSrvc.APP_LANGUAGE[SettingsSrvc.getAppLanguageId()];
	$scope.weatherLanguageId=SettingsSrvc.WEATHER_LANGUAGE[SettingsSrvc.getWeatherLanguageId()];
	
	$scope.getDynamicDesc = function(key)
	{	
		if(key == "city")
		{
			if($scope.city==null)
			{
				return "No city set.";
			}
			else
			{
				return "Current city set : " +$scope.city+".";
			}
		}		
		if(key == "accurate")
		{
			if($scope.accurate == false)
			{
				return "Will search the closest city.";
			}
			else
			{
				return "Will search the exact city.";
			}
		}
		if(key == "geolocate")
		{
			if($scope.geolocate==false)
			{
				return "Will use the registered city.";
			}
			else
			{
				return "Will use wifi/GPS location or registered city.";
			}
		}
		if(key == "tempunit")
		{
			return "Selected temp unit : "+$scope.tempUnitId.unit+".";
		}
		if(key == "speedunit")
		{
			return "Selected speed unit : "+$scope.speedUnitId.unit+".";
		}
		if(key == "applanguage")
		{
			return "Language for the application.<br/>Currently selected : "+$scope.appLanguageId.label_setting+".";
		}
		if(key == "weatherlanguage")
		{
			return "Language weather from the provider openweathermap.<br/>Currently selected : "+$scope.weatherLanguageId.label_setting+".";
		}
		
		if(key == "cnt")
		{
			if($scope.city==null)
			{
				return "Will use default max number of result.";		
			}
			else
			{
				return "Max number of result if available : "+$scope.nbCnt+".";		
			}
		}
		return null;
	};
	
	$scope.toggleSettingData = function($event)
	{		
		var target = angular.element($event.currentTarget).parent();
		if(!target.hasClass("show_input_data"))
		{			
			var searchEles = target.parent().children();
			searchEles.removeClass("show_input_data");
			target.addClass("show_input_data");
		}
		else
		{
			target.removeClass("show_input_data");			
		}		
	};
	
	$scope.saveSetting = function()
	{
		SettingsSrvc.setCity($scope.city);
		SettingsSrvc.setIsAccurate($scope.accurate);
		SettingsSrvc.setIsGeolocate($scope.geolocate);
		SettingsSrvc.setTempUnitId($scope.tempUnitId.id);
		SettingsSrvc.setSpeedUnitId($scope.speedUnitId.id);
		SettingsSrvc.setAppLanguageId($scope.appLanguageId.id);
		SettingsSrvc.setWeatherLanguageId($scope.weatherLanguageId.id);
		SettingsSrvc.setCnt($scope.nbCnt);
		
		$location.path('#home');
	};
	
	
}]);


window.deviceReady = false;
document.addEventListener('deviceready',_ready,false);
window.onload=_ready();
function _ready() {	
	if(!window.deviceReady)
	{
		angular.bootstrap(document, ['yaoswa']);		
	}
	window.deviceReady = true;
}

