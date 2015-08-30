/*
begin JS def
*/
function filter(arr, criteria) {
	return arr.filter(function(obj) {
		return Object.keys(criteria).every(function(c) {
			return obj[c] == criteria[c];
		});
	});
}

/*	
end JS def
*/
var yaoswa = angular.module('yaoswa',['ngRoute','ngSanitize','ngCordova','afkl.lazyImage','angularMoment','gettext']);

yaoswa.config(function($routeProvider) {
	$routeProvider
		.when('/yaoswa',
			{
				title: 'YAOSWA',
				templateUrl :'templates/home.html',
				controller: 'HomeCtrl',				
				resolve: {
					loaded: function(InitSrvc) {
						return InitSrvc.init();
					}
				}
			}
		)
		.when('/about',{title: 'About',templateUrl :'templates/about.html', controller: 'AboutCtrl'})
		.when('/settings',
			{
				title: 'Settings',
				templateUrl :'templates/settings.html',
				controller: 'SettingCtrl',		
				resolve: {
					//Even if it will never happen, just in case
					loaded: function(InitSrvc) {
						return InitSrvc.init();
					}
				}
			}
		)
		.otherwise('/yaoswa',{title: 'YAOSWA',redirectTo :'/yaoswa'});
});


yaoswa.run(function (gettextCatalog) {
    // Load the strings automatically during initialization.
    gettextCatalog.setStrings("fr", {
        "Settings" : "Paramètres" ,
		"About" : "Á Propos",
		"Refresh" : "Rafraichir",
		"standard" : "standard",
		"Kelvin (K)" : "Kelvin (K)",
		"K" : "K",
		"imperial" : "imperial",
		"Fahrenheit (°F)" : "Fahrenheit (°F)",
		"°F" : "°F",
		"metric" : "metric",
		"Celsius (°C)" : "Celsius (°C)",
		"°C" : "°C",
		"meterspersecond" : "meterspersecond",
		"Meters per second (m/s)" : "Mètres par seconde (m/s)",
		"m/s" : "m/s",
		"kilometersperhour" : "kilometersperhour",
		"Kilometers per hour (km/h)" : "Kilomètres par heure (km/h)",
		"km/h" : "km/h",
		"milesperhour" : "milesperhour",
		"Miles per hour (MpH)" : "Miles par heure (MpH)",
		"MpH" : "MpH",
		"default" : "default",
		"%" : "%",
		"millimeters" : "millimeters",
		"mm" : "mm",
		"inches" : "pouces",
		"in" : "in",
		"N/A" : "N/A",
		"N" : "N",
		"NNE" : "NNE",
		"NE" : "NE",
		"ENE" : "ENE",
		"E" : "E",
		"ESE" : "ESE",
		"SE" : "SE",
		"SSE" : "SSE",
		"S" : "S",
		"SSW" : "SSW",
		"SW" : "SW",
		"WSW" : "WSW",
		"W" : "W",
		"WNW" : "WNW",
		"NW" : "NW",
		"NNW" : "NNW",
		"Starry sky" : "Ciel étoilé",
		"Partly starry sky" : "Ciel partiellement étoilé",		
		"Now" : "Maintenant",
		"Next Hours" : "Prochaines heures",
		"Next Days" : "Prochains jours",
		"Lon : {{LON}}, Lat : {{LAT}}" : "Lon : {{LON}}, Lat : {{LAT}}",	
		"City not Found." : "Ville introuvable.",
		"Unable to get data.<br/>Check your network connection." : "Erreur lors de la récupération des données<br/>Vérifier votre connexion internet.",
		"No city set." : "Aucune ville selectionnée.",
		"Current city set : {{CITY}}." : "Ville selectionnée : {{CITY}}.",
		"Will search the closest city." : "Cherchera la ville la plus proche.",
		"Will search the exact city." : "Cherchera la ville exacte.",
		"Will use the registered city." : "Utilisera la ville selectionnée.",
		"Will use wifi/GPS location if enable." : "Utilisera le wifi/GPS si disponible.",
		"Selected temp unit : {{UNIT}}." : "Unité de température selectionnée  : {{UNIT}}.",
		"Selected speed unit : {{UNIT}}." : "Unité de vitesse selectionnée : {{UNIT}}.",
		"Language for the application.<br/>Currently selected : {{LABEL_SETTING}}." : "Langue de l'application <br/>Actuel : {{LABEL_SETTING}}.",
		"Language weather from the provider OpenWeatherMap.<br/>Currently selected : {{LABEL_SETTING}}." : "Langue de la météo provenant de OpenWeatherMap.<br/>Actuel : {{LABEL_SETTING}}.",
		"Will use default max number of results." : "Utilisera le nombre maximum de résultats par défaut.",	
		"Max number of results if available : {{NUMBER}}." : "Nombre maximum de résultats si disponible : {{NUMBER}}.",
		"Localisation" : "Localisation",
		"City" : "Ville",
		"Accurate" : "Précision",
		"Auto positionning" : "Position automatique",
		"Units" : "Unités",
		"Temperature" : "Température",
		"Speed" : "Vitesse",
		"Results" : "Résultats",
		"Max Results" : "Nombre Max de résultats",
		"Languages" : "Langages",
		"Application language" : "Langage de l'application",
		"Weather Language" : "Langage de la météo",
		"Save" : "Sauvegarder",		
		"YAOSWA is a weather application created for ubuntu phone." : "YAOSWA est une application météo créé pour les téléphones Ubuntu.",
		"This app is powered by" : "Cette application est propulsée par",
		"and" : "et",
		"Website and support:":"Site web et support :",
		"License":"Licence :"
    });
});

yaoswa.run(['$location','$rootScope','gettextCatalog','HeaderSrvc', function($location,$rootScope,gettextCatalog,HeaderSrvc) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    	if (current.$$route !== undefined && current.$$route.title !== undefined) {
			HeaderSrvc.setHeaderTitle(gettextCatalog.getString(current.$$route.title));        	
		}
		else
		{
			HeaderSrvc.setHeaderTitle("YAOSWA");
		}
    });
}]);

yaoswa.service('InitSrvc',['$window','$rootScope','$q','$cordovaGlobalization','$cordovaFile','amMoment','gettextCatalog','SettingsSrvc', function($window,$rootScope,$q,$cordovaGlobalization,$cordovaFile,amMoment,gettextCatalog,SettingsSrvc) {
	
	function detectandshow(deffered)
	{
		var appLanguageList=SettingsSrvc.getAppLanguageList();
		var weatherLanguageList=SettingsSrvc.getWeatherLanguageList();
		if(!SettingsSrvc.isLanguageSet())
		{
			$cordovaGlobalization.getLocaleName().then(
				function(locale){
					var alternate_locale;
					var can_alternate=false;
					
					var localeVal = locale["value"];
					if(localeVal.indexOf("_") > -1)
					{
						can_alternate=true;
						alternate_locale=localeVal.split("_")[0];
					}
					
					var app_language_detect;
					var app_alternate_language_detect;
					
					var weather_language_detect;
					var weather_alternate_language_detect;
					
					var default_language_id;
					
					for(appLanguage in appLanguageList)	
					{
						if(localeVal==appLanguageList[appLanguage]["label"])
						{
							app_language_detect=appLanguageList[appLanguage]["id"];
						}
						if(can_alternate)
						{
							if(alternate_locale==appLanguageList[appLanguage]["label"])
							{
								app_alternate_language_detect=appLanguageList[appLanguage]["id"];				
							}
						}
					}
					
					for(weatherLanguage in weatherLanguageList)	
					{
						if(localeVal==weatherLanguageList[weatherLanguage]["label"])
						{
							weather_language_detect=weatherLanguageList[weatherLanguage]["id"];
						}
						if(can_alternate)
						{
							if(alternate_locale==weatherLanguageList[weatherLanguage]["label"])
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
					amMoment.changeLocale(SettingsSrvc.getAppLanguage().label);
				    gettextCatalog.setCurrentLanguage(SettingsSrvc.getAppLanguage().label);
	        		deferred.resolve();
	
				},
				function(){							
					SettingsSrvc.setAppLanguageId(0);
					SettingsSrvc.setWeatherLanguageId(0);				
					amMoment.changeLocale(SettingsSrvc.getAppLanguage().label);
				    gettextCatalog.setCurrentLanguage(SettingsSrvc.getAppLanguage().label);
	        		deferred.reject();
				}
			);
		}
		else
		{
			amMoment.changeLocale(SettingsSrvc.getAppLanguage().label);
	    	gettextCatalog.setCurrentLanguage(SettingsSrvc.getAppLanguage().label);		
	        deferred.resolve();
		}	
		$rootScope.startLoadingOverlay="none";
	}
	
	var deferred = $q.defer();
	this.alreadydone=false;
	this.init = function ()
	{	
		if(!this.alreadydone)
		{
			this.alreadydone=true;
			$cordovaFile.readAsText("cdvfile://localhost/persistent/", "localstorageWrapper.txt").then(
		        function (success) {
		        	var objParam={};
					try
					{
						objParam=JSON.parse(success);
					}
					catch(e)
					{
						console.log("Not parsable");
					}
					SettingsSrvc.setSettingsFromObj(objParam);
		            detectandshow(deferred);
		        }, function (error) {
		            detectandshow(deferred);
		        }
		    );
		}
		else
		{
			deferred.resolve();
		}
	    return deferred.promise;
	 };
	
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

yaoswa.service('SettingsSrvc',['gettextCatalog', function(gettextCatalog) {
	
    this.defaultCity="Limoges,FR";
    this.defaultIsAccurate=false;
    this.defaultIsGeolocate=false;
    this.defaultTempUnitId=0;
    this.defaultSpeedUnitId=0;
    this.defaultAppLanguageId=0;
    this.defaultWeatherLanguageId=0;
    this.defaultCnt=14;
    this.defaultLanguage="en";
    this.settings = {};

	this.apiId = "26e1b3965e3ffa342a675e4b6b735832";
	
	this.getTempList = function ()
	{
		return [{
				  id: 0,
				  label: 'standard',
				  owm: 'standard',
				  label_setting: gettextCatalog.getString('Kelvin (K)'),
				  unit: gettextCatalog.getString('K')
				}, {
				  id: 1,
				  label: 'imperial',
				  owm: 'imperial',
				  label_setting: gettextCatalog.getString('Fahrenheit (°F)'),
				  unit: gettextCatalog.getString('°F')
				}, {
				  id: 2,
				  label: 'metric',
				  owm: 'metric',
				  label_setting: gettextCatalog.getString('Celsius (°C)'),
				  unit: gettextCatalog.getString('°C')
				}];
	};
	
	this.getSpeedList = function ()
	{
		return [{
				  id: 0,
				  label: 'meterspersecond',
				  label_setting: gettextCatalog.getString('Meters per second (m/s)'),	  
				  unit: gettextCatalog.getString('m/s')
				}, {
				  id: 1,
				  label: 'kilometersperhour',
				  label_setting: gettextCatalog.getString('Kilometers per hour (km/h)'),	  
				  unit: gettextCatalog.getString('km/h')
				}, {
				  id: 2,
				  label: 'milesperhour',
				  label_setting: gettextCatalog.getString('Miles per hour (MpH)'),	  
				  unit: gettextCatalog.getString('MpH')
				}];	
	};
	
	this.getAppLanguageList = function ()
	{
		return [{
				  id: 0,
				  label: 'en',
				  label_setting: 'English'
				}, {
				  id: 1,
				  label: 'fr',
				  label_setting: 'Français'
				}];
	};
	this.getWeatherLanguageList = function ()
	{
		return [{
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
	};
	
	this.getPercList = function ()
	{
		return [{
				  id: 0,
				  label: 'default',
				  unit: '%'
				}];
	};
	this.getPressureList = function ()
	{
		return [{
				  id: 0,
				  label: 'default',
				  unit: 'Hpa'
				}];
	};
	
	this.getPrecipList = function ()
	{
		return [{
				  id: 0,
				  label: 'millimeters',
				  unit: 'mm'
				}, {
				  id: 1,
				  label: 'inch',
				  unit: 'inch'
				}];	
	};
	
	this.getCity= function()
	{
		return this.settings.city || this.defaultCity;
	};
	this.setCity= function(city)
	{
		this.settings.city=city;
	};
	
	this.getIsAccurate= function()
	{
		var isAccurate=this.settings.isaccurate;
		if(typeof(isAccurate)!=="undefined")
		{
			if(isAccurate==="true" || isAccurate === true)
			{
				return true;
			}			
			else if(isAccurate==="false" || isAccurate === false)
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
		this.settings.isaccurate=isaccurate;
	};
	
	this.getIsGeolocate= function()
	{
		var isGeolocate=this.settings.isgeolocate;
		if(typeof(isGeolocate)!=="undefined")
		{
			if(isGeolocate==="true" || isGeolocate === true)
			{
				return true;
			}			
			else if(isGeolocate==="false" || isGeolocate === false)
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
		this.settings.isgeolocate=isgeolocate;
	};
	
	
	this.getTempUnitId= function()
	{		
		var TempList = this.getTempList();
		if(typeof(this.settings.tempunitid)!=="undefined")
		{
		    var tempUnit=filter(TempList,{id:this.settings.tempunitid});	    
		    if(typeof(tempUnit[0])!="undefined")
		    {
		    	return tempUnit[0].id;
		    }			
		}
	    return this.defaultTempUnitId;
	};
	this.getTempUnit= function()
	{		
		var TempList = this.getTempList();
		if(typeof(this.settings.tempunitid)!=="undefined")
		{
		    var tempUnit=filter(TempList,{id:this.settings.tempunitid});	    
		    if(typeof(tempUnit[0])!="undefined")
		    {
		    	return tempUnit[0];
		    }	    
		}
	    return filter(TempList,{id:0})[0];
	};
	this.setTempUnitId= function(tempunitid)
	{
		this.settings.tempunitid=tempunitid;
	};
	
	
	this.getSpeedUnitId= function()
	{		
		var speedList = this.getSpeedList();
		if(typeof(this.settings.speedunitid)!=="undefined")
		{
		    var speedUnit=filter(speedList,{id:this.settings.speedunitid});	    
		    if(typeof(speedUnit[0])!="undefined")
		    {
		    	return speedUnit[0].id;
		    }	    			
		}
	    return this.defaultSpeedUnitId;
	};
	
	this.getSpeedUnit= function()
	{		
		var speedList = this.getSpeedList();
		if(typeof(this.settings.speedunitid)!=="undefined")
		{
		    var speedUnit=filter(speedList,{id:this.settings.speedunitid});	    
		    if(typeof(speedUnit[0])!="undefined")
		    {
		    	return speedUnit[0];
		    }
		}    
	    return filter(speedList,{id:0})[0];
	};
	
	this.setSpeedUnitId= function(speedunitid)
	{
		this.settings.speedunitid=speedunitid;
	};

	this.getAppLanguageId= function()
	{
		
		var appLanguageList = this.getAppLanguageList();
		if(typeof(this.settings.applanguageid)!=="undefined")
		{
		    var appLanguage=filter(appLanguageList,{id:this.settings.applanguageid});	    
		    if(typeof(appLanguage[0])!="undefined")
		    {
		    	return appLanguage[0].id;
		    }			
		}    
	    return this.defaultAppLanguageId;
	};
	
	this.getAppLanguage= function()
	{
		var appLanguageList = this.getAppLanguageList();
		if(typeof(this.settings.applanguageid)!=="undefined")
		{
		    var appLanguage=filter(appLanguageList,{id:this.settings.applanguageid});	    
		    if(typeof(appLanguage[0])!="undefined")
		    {
		    	return appLanguage[0];
		    }
		}
	    return filter(appLanguageList,{id:0})[0];
	};
	this.setAppLanguageId= function(applanguageid)
	{
		this.settings.applanguageid=applanguageid;
	};


	this.getWeatherLanguageId= function()
	{
		var weatherLanguageList = this.getWeatherLanguageList();
		if(typeof(this.settings.weatherlanguageid)!=="undefined")
		{
		    var weatherLanguage=filter(weatherLanguageList,{id:this.settings.weatherlanguageid});	    
		    if(typeof(weatherLanguage[0])!="undefined")
		    {
		    	return weatherLanguage[0].id;
		    }
		}
	    return this.defaultWeatherLanguageId;
	};
	
	this.getWeatherLanguage= function()
	{
		var weatherLanguageList = this.getWeatherLanguageList();
		if(typeof(this.settings.weatherlanguageid)!=="undefined")
		{
		    var weatherLanguage=filter(weatherLanguageList,{id:this.settings.weatherlanguageid});	    
		    if(typeof(weatherLanguage[0])!="undefined")
		    {
		    	return weatherLanguage[0];
		    }	
	    }    
	    return filter(weatherLanguageList,{id:0})[0];
	};
	this.setWeatherLanguageId= function(weatherlanguageid)
	{
		this.settings.weatherlanguageid=weatherlanguageid;
	};	
	
	this.isLanguageSet= function() {
		if(typeof(this.settings.applanguageid) === "undefined" || typeof(this.settings.weatherlanguageid) === "undefined")
		{
			return false;
		}
		return true;
	};
	
	this.getCnt= function()
	{
		return this.settings.cnt || this.defaultCnt;
	};
	this.setCnt= function(cnt)
	{
		this.settings.cnt=cnt;
	};
		
	this.getApiId= function()
	{
		return this.apiId;
	};
		
	
	
	
	this.getPercUnit = function()
	{				
		var PercList = this.getPercList();
	    var perc=filter(PercList,{id:0});	    
	    if(typeof(perc[0])!="undefined")
	    {
	    	return perc[0];
	    }	    
	    return filter(PercList,{id:0})[0];
	};	
	this.getPrecipUnit = function()
	{
		var PrecipList = this.getPrecipList();
	    var precip=filter(PrecipList,{id:0});	    
	    if(typeof(precip[0])!="undefined")
	    {
	    	return precip[0];
	    }	    
	    return filter(PrecipList,{id:0})[0];
	};	
	
	this.getPressureUnit = function()
	{
		var PressureList = this.getPressureList();
	    var pressure=filter(PressureList,{id:0});	    
	    if(typeof(pressure[0])!="undefined")
	    {
	    	return pressure[0];
	    }	    
	    return filter(PressureList,{id:0})[0];
	};		
	
	this.getAllSettings = function()
	{
		var objParam = {};
		objParam.city=this.getCity();
		objParam.isacccurate=this.getIsAccurate();
		objParam.isgeolocate=this.getIsGeolocate();
		objParam.tempunitid=this.getTempUnitId();
		objParam.speedunitid=this.getSpeedUnitId();
		objParam.applanguageid=this.getAppLanguageId();
		objParam.weatherlanguageid=this.getWeatherLanguageId();
		objParam.cnt=this.getCnt();		
		return objParam;
	};

	this.setSettingsFromObj = function(objParam)
	{
		if(typeof(objParam.city)!=="undefined")
		{
			this.setCity(objParam.city);
		}
		if(typeof(objParam.isacccurate)!=="undefined")
		{
			this.setIsAccurate(objParam.isacccurate);
		}
		if(typeof(objParam.isgeolocate)!=="undefined")
		{
			this.setIsGeolocate(objParam.isgeolocate);
		}
		if(typeof(objParam.tempunitid)!=="undefined")
		{
			this.setTempUnitId(objParam.tempunitid);
		}
		if(typeof(objParam.speedunitid)!=="undefined")
		{
			this.setSpeedUnitId(objParam.speedunitid);
		}
		if(typeof(objParam.applanguageid)!=="undefined")
		{
			this.setAppLanguageId(objParam.applanguageid);
		}
		if(typeof(objParam.applanguageid)!=="undefined")
		{
			this.setWeatherLanguageId(objParam.applanguageid);
		}
		if(typeof(objParam.cnt)!=="undefined")
		{
			this.setWeatherLanguageId(objParam.weatherlanguageid);
		}	
	};
}]);

yaoswa.service('WeatherFact', ['gettextCatalog','UtilsSrvc','SettingsSrvc', function(gettextCatalog,UtilsSrvc,SettingsSrvc) {
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

			weatherObj.percUnitLab=gettextCatalog.getString(SettingsSrvc.getPercUnit().unit);
			weatherObj.pressureUnitLab=gettextCatalog.getString(SettingsSrvc.getPressureUnit().unit);
			weatherObj.precUnitLab=gettextCatalog.getString(SettingsSrvc.getPrecipUnit().unit);
			weatherObj.tempUnitLab=gettextCatalog.getString(SettingsSrvc.getTempUnit().unit);
			weatherObj.speedUnitLab=gettextCatalog.getString(SettingsSrvc.getSpeedUnit().unit);
			
			if(type_weather===0)
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
					var sunset_date = new Date(weatherObj.sunset*1000);
					if(!(sunrise_date <= dt_date && dt_date < sunset_date))
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
			if(type_weather===1)
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
			if(type_weather===2)
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
					for(var j in HTTPresponse.list)
					{
						weatherObj.list[j]=new Object();
						weatherObj.list[j].dt=HTTPresponse.list[j].dt*1000;
						weatherObj.list[j].description=HTTPresponse.list[j].description;						
						
						
						
						if(typeof(HTTPresponse.list[j].temp) !== "undefined")
						{
							weatherObj.list[j].temp=HTTPresponse.list[j].temp.day;
							weatherObj.list[j].temp_min=HTTPresponse.list[j].temp.min;
							weatherObj.list[j].temp_max=HTTPresponse.list[j].temp.max;
						}
						
						if(typeof(HTTPresponse.list[j].sys) !== "undefined")
						{
							weatherObj.list[j].pod="d";
						}
						
						if(typeof(HTTPresponse.list[j].weather) !== "undefined")
						{
							weatherObj.list[j].description=HTTPresponse.list[j].weather[0].description;
							weatherObj.list[j].weather_id=HTTPresponse.list[j].weather[0].id;	
							weatherObj.list[j].customInfo=UtilsSrvc.getCustomWeatherInfo(weatherObj.list[j].weather_id,weatherObj.list[j].pod);	
							
							if(typeof(weatherObj.list[j].customInfo.description) !== "undefined" )
							{
								weatherObj.list[j].description=weatherObj.list[j].customInfo.description;						
							}
							
						}
						weatherObj.list[j].clouds=HTTPresponse.list[j].clouds;				
						weatherObj.list[j].pressure=HTTPresponse.list[j].pressure;
						weatherObj.list[j].humidity=HTTPresponse.list[j].humidity;		
						weatherObj.list[j].rain=HTTPresponse.list[j].rain;
						weatherObj.list[j].snow=HTTPresponse.list[j].snow;
						weatherObj.list[j].wind_deg=HTTPresponse.list[j].deg;
						weatherObj.list[j].wind_orient=UtilsSrvc.getOrientationFromDegree(weatherObj.list[j].wind_deg);
						
						weatherObj.list[j].wind_gust=UtilsSrvc.getSpeedData(speed_unit_id,HTTPresponse.list[j].gust);
						weatherObj.list[j].wind_speed=UtilsSrvc.getSpeedData(speed_unit_id,HTTPresponse.list[j].wind_speed);						
					}
				}				
			}		
		    console.log(weatherObj);     
			return weatherObj;
	    }
	};
	
	return WeatherFact;
}]);	

yaoswa.service('WeatherSrvc', ['SettingsSrvc','$cordovaGeolocation','$http','$q', function(SettingsSrvc,$cordovaGeolocation,$http,$q) {	
	this.getWeatherParam = function() {
		var param = new Object();
		param.location = SettingsSrvc.getCity();
		param.accurate = SettingsSrvc.getIsAccurate();
		param.geolocate = SettingsSrvc.getIsGeolocate();
		param.tempUnit = SettingsSrvc.getTempUnit().owm;
		param.cnt = SettingsSrvc.getCnt();
		param.apiId = SettingsSrvc.getApiId();		
		param.lang = SettingsSrvc.getWeatherLanguage().label;
		param.cordovaOpt = {timeout: 60000,maximumAge: 100000};
		if(param.accurate===true)
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
			request_return = $cordovaGeolocation.getCurrentPosition(param.cordovaOpt).then(
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
			request_return = $cordovaGeolocation.getCurrentPosition(param.cordovaOpt).then(
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
			request_return = $cordovaGeolocation.getCurrentPosition(param.cordovaOpt).then(
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


yaoswa.service('UtilsSrvc', [ 'gettextCatalog','SettingsSrvc', function(gettextCatalog,SettingsSrvc) {	
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
	
	this.getSpeedData = function(temp_unit_id,speed_unit_id,speed_data)
	{
		temp_unit_id = temp_unit_id || 0 ;
		speed_unit_id = speed_unit_id || 0 ;
		speed_data = speed_data || 0 ;		
		var speed=0;
		
		if(temp_unit_id === 0 || temp_unit_id === 2)
		{
			speed_data=this.convertmphtoms(speed_data);
		}
        if(speed_unit_id===0)
		{
        	speed=speed_data;
		}
        else if (speed_unit_id===1)
        {
        	speed=this.mpsToKph(speed_data);
		}
        else if (speed_unit_id===2)
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
        if(precip_unit_id===0)
		{
        	precip=precip_data;
		}
        else if (precip_unit_id===1)
        {
        	precip=this.mmToIn(precip_data);
		}
        
        return precip;
	};
	
	
	this.getOrientationFromDegree = function(degree)
	{
		var orient =gettextCatalog.getString("N/A");
		
		
		if((degree>=348.75 && degree<=380) || ((degree>=0 && degree<=11.25)))
		{
			orient=gettextCatalog.getString("N");
		}
		else if (degree>=11.25 && degree<=33.75)
		{
			orient=gettextCatalog.getString("NNE");
		}
		else if (degree>=33.75 && degree<=56.25)
		{
			orient=gettextCatalog.getString("NE");
		}
		else if (degree>=56.25 && degree<=78.75)
		{
			orient=gettextCatalog.getString("ENE");
		}
		else if (degree>=78.75 && degree<=101.25)
		{
			orient=gettextCatalog.getString("E");
		}
		else if (degree>=101.25 && degree<=123.75)
		{
			orient=gettextCatalog.getString("ESE");
		}
		else if (degree>=123.75 && degree<=146.25)
		{
			orient=gettextCatalog.getString("SE");
		}
		else if (degree>=146.25 && degree<=168.75)
		{
			orient=gettextCatalog.getString("SSE");
		}
		else if (degree>=168.75 && degree<=191.25)
		{
			orient=gettextCatalog.getString("S");
		}
		else if (degree>=191.25 && degree<=213.75)
		{
			orient=gettextCatalog.getString("SSW");
		}
		else if (degree>=213.75 && degree<=236.25)
		{
			orient=gettextCatalog.getString("SW");
		}
		else if (degree>=236.25 && degree<=258.75)
		{
			orient=gettextCatalog.getString("WSW");
		}
		else if (degree>=258.75 && degree<=281.25)
		{
			orient=gettextCatalog.getString("W");
		}
		else if (degree>=281.25 && degree<=303.75)
		{
			orient=gettextCatalog.getString("WNW");
		}
		else if (degree>=303.75 && degree<=326.25)
		{
			orient=gettextCatalog.getString("NW");
		}
		else
		{
			orient=gettextCatalog.getString("NNW");
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
		var description;
		var day_status = "day";
		var isNight = false;
		
		var langWeather=SettingsSrvc.getWeatherLanguage().label;
		
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
				if(gettextCatalog.getStringLangExist(langWeather,"Starry sky"))
				{
					description=gettextCatalog.getStringLang(langWeather,"Starry sky");					
				}
			}
		
		}
		else if(code==801)
		{
			color=color_yellow;
			image=image_sun_cloud;
			if(isNight)
			{
				image=image_moon_cloud;				
				if(gettextCatalog.getStringLangExist(langWeather,"Partly starry sky"))
				{
					description=gettextCatalog.getStringLang(langWeather,"Partly starry sky");					
				}
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

yaoswa.controller('HomeCtrl',['$scope','gettextCatalog','WeatherSrvc','HeaderSrvc','WeatherFact',
function ($scope,gettextCatalog,WeatherSrvc,HeaderSrvc,WeatherFact) {
	var weather_title=new Array(
		gettextCatalog.getString("Now"),
		gettextCatalog.getString("Next Hours"),
		gettextCatalog.getString("Next Days")
	);
	
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
			return gettextCatalog.getString("Lon :  {{LON}}, Lat :  {{LAT}}",{LON : $scope.lon_header_title, LAT : $scope.lat_header_title});			
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
		if($scope.activeTab==index && $scope.loaderOverlay===false)
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
					$scope.errorOverlaymsg=gettextCatalog.getString("City not Found.");
					return true;			
			}
			else if(weather_test.cod == 500)
			{
					$scope.errorOverlaymsg=gettextCatalog.getString("Unable to get data.<br/>Check your network connection.");
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

yaoswa.controller('SettingCtrl',['$scope','$location','$cordovaFile','HeaderSrvc','SettingsSrvc','amMoment','gettextCatalog', function ($scope,$location,$cordovaFile,HeaderSrvc,SettingsSrvc,amMoment,gettextCatalog) {
	HeaderSrvc.setShowBackButton(true);
			
    $scope.city=SettingsSrvc.getCity();
	$scope.accurate=SettingsSrvc.getIsAccurate();
	$scope.geolocate=SettingsSrvc.getIsGeolocate();
	$scope.nbCnt=SettingsSrvc.getCnt();
	
	$scope.tempList=SettingsSrvc.getTempList();
	$scope.speedList=SettingsSrvc.getSpeedList();
	$scope.appLanguageList=SettingsSrvc.getAppLanguageList();
	$scope.weatherLanguageList=SettingsSrvc.getWeatherLanguageList();
	$scope.tempUnit=SettingsSrvc.getTempUnit();
	$scope.speedUnit=SettingsSrvc.getSpeedUnit();
	$scope.appLanguage=SettingsSrvc.getAppLanguage();
	$scope.weatherLanguage=SettingsSrvc.getWeatherLanguage();
	
	
	$scope.getDynamicDesc = function(key)
	{	
		if(key == "city")
		{
			if($scope.city===null || String($scope.city).trim()==='')
			{
				return gettextCatalog.getString("No city set.");
			}
			else
			{
				return gettextCatalog.getString("Current city set : {{CITY}}.", { CITY: String($scope.city).trim() });
			}
		}		
		if(key == "accurate")
		{
			if($scope.accurate === false)
			{
				return gettextCatalog.getString("Will search the closest city.");
			}
			else
			{
				return gettextCatalog.getString("Will search the exact city.");
			}
		}
		if(key == "geolocate")
		{
			if($scope.geolocate===false)
			{
				return gettextCatalog.getString("Will use the registered city.");
			}
			else
			{
				return gettextCatalog.getString("Will use wifi/GPS location if enable.");
			}
		}
		if(key == "tempunit")
		{
			return gettextCatalog.getString("Selected temp unit : {{UNIT}}.",{UNIT : $scope.tempUnit.unit});
		}
		if(key == "speedunit")
		{
			return gettextCatalog.getString("Selected speed unit : {{UNIT}}.",{UNIT : $scope.speedUnit.unit});
		}
		if(key == "applanguage")
		{
			return gettextCatalog.getString("Language for the application.<br/>Currently selected : {{LABEL_SETTING}}.",{LABEL_SETTING : $scope.appLanguage.label_setting});
		}
		if(key == "weatherlanguage")
		{
			return gettextCatalog.getString("Language weather from the provider OpenWeatherMap.<br/>Currently selected : {{LABEL_SETTING}}.",{LABEL_SETTING : $scope.weatherLanguage.label_setting});			
		}
		
		if(key == "cnt")
		{
			if($scope.nbCnt===null || String($scope.nbCnt).trim()==='')
			{
				return gettextCatalog.getString("Will use default max number of results.");		
			}
			else
			{
				return gettextCatalog.getString("Max number of results if available : {{NUMBER}}.",{ NUMBER : String($scope.nbCnt).trim() });		
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
		SettingsSrvc.setCity(String($scope.city).trim());
		SettingsSrvc.setIsAccurate($scope.accurate);
		SettingsSrvc.setIsGeolocate($scope.geolocate);
		SettingsSrvc.setTempUnitId($scope.tempUnit.id);
		SettingsSrvc.setSpeedUnitId($scope.speedUnit.id);
		SettingsSrvc.setAppLanguageId($scope.appLanguage.id);
		SettingsSrvc.setWeatherLanguageId($scope.weatherLanguage.id);
		SettingsSrvc.setCnt(String($scope.nbCnt).trim());		
		
		$cordovaFile.writeFile("cdvfile://localhost/persistent/", "localstorageWrapper.txt", JSON.stringify(SettingsSrvc.getAllSettings()), true).then(
			function (success) {
				console.log("Success but I don't care");
			}, function (error) {
				console.log("Error but I don't care");
			}
		);
      
		amMoment.changeLocale(SettingsSrvc.getAppLanguage().label);
    	gettextCatalog.setCurrentLanguage(SettingsSrvc.getAppLanguage().label);
		$location.path('#home');
	};
	
	
}]);


window.deviceReady = false;
document.addEventListener('deviceready',_ready,false);
//uncomment only for browser test
//window.onload=_ready();
function _ready() {	
	if(!window.deviceReady)
	{
		if(typeof(cordova)!=='undefined')
		{
			window.open = cordova.InAppBrowser.open;			
		}		
		angular.bootstrap(document, ['yaoswa']);
	}
	window.deviceReady = true;
}

