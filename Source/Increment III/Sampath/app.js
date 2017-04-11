// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var translate=angular.module('myApp',['ionic'])
var currency=angular.module('myCurrency',['ionic'])
var test=angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

translate.controller('myCtrl', function($scope,$http) {
	$scope.convertText = function() {
		var SourceText= document.getElementById("SourceText").value.toString();
		var SourceLanguage = document.getElementById("SourceLanguage");
		SourceLanguage=SourceLanguage.options[SourceLanguage.selectedIndex].value;
		$scope.sourceLang = SourceLanguage;
		
		var DestinationText=document.getElementById("DestinationText").value.toString();
		var DestinationLanguage = document.getElementById("DestinationLanguage");
		DestinationLanguage =DestinationLanguage.options[DestinationLanguage.selectedIndex].value;
    
       
		$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20151023T145251Z.bf1ca7097253ff7e.c0b0a88bea31ba51f72504cc0cc42cf891ed90d2&text='+SourceText+'&lang='+SourceLanguage+'-'+DestinationLanguage+'&[format=plain]&[options=1]&[callback=set]')
			.success(function(response) {
				$scope.desttxt = response.text;
			})
			.error(function(response) {
				//alert(error);
			});
		
			
		var DestinationText1=document.getElementById("DestinationText1").value.toString();
		var DestinationLanguage1 = document.getElementById("DestinationLanguage1");
		DestinationLanguage1 =DestinationLanguage1.options[DestinationLanguage1.selectedIndex].value;
    
       
		$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20151023T145251Z.bf1ca7097253ff7e.c0b0a88bea31ba51f72504cc0cc42cf891ed90d2&text='+SourceText+'&lang='+SourceLanguage+'-'+DestinationLanguage1+'&[format=plain]&[options=1]&[callback=set]')
			.success(function(response) {
				$scope.desttxt1 = response.text;
			})
			.error(function(response) {
				//alert(error);
			});
		
		
		
		var DestinationText2=document.getElementById("DestinationText2").value.toString();
		var DestinationLanguage2 = document.getElementById("DestinationLanguage2");
		DestinationLanguage2 =DestinationLanguage2.options[DestinationLanguage2.selectedIndex].value;
    
       
		$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20151023T145251Z.bf1ca7097253ff7e.c0b0a88bea31ba51f72504cc0cc42cf891ed90d2&text='+SourceText+'&lang='+SourceLanguage+'-'+DestinationLanguage2+'&[format=plain]&[options=1]&[callback=set]')
			.success(function(response) {
				$scope.desttxt2 = response.text;
			})
			.error(function(response) {
				//alert(error);
			});
		
			
	}
});	


currency.controller('cont', function($scope,$http) {
	$scope.Currency = function() {
		var SourceValue=document.getElementById("SourceValue").value;
        var SourceCurrency = document.getElementById("SourceCurrency");
        SourceCurrency=SourceCurrency.options[SourceCurrency.selectedIndex].value;
		var TargetCurrency = document.getElementById("TargetCurrency");
        TargetCurrency =TargetCurrency.options[TargetCurrency.selectedIndex].value;
		$http.get('http://api.fixer.io/latest?symbols='+SourceCurrency+','+TargetCurrency+'')
			.success(function(response) {
				var list=response.rates;
				var TargetRate=response.rates[TargetCurrency];
				var SourceRate=response.rates[SourceCurrency];
				BaseRate=TargetRate/SourceRate;    
				OutputValue=SourceValue*BaseRate;
				document.getElementById("TargetValue").value=OutputValue;
				$scope.destAmount=OutputValue;
        });
	}
});
				
		
