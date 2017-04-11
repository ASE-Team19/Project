var test=angular.module('myApp',[ionic])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  
test.controller('myCtrl', function($scope,$http) {
	
	$scope.convertText =function()
          {
   /*	var SourceText= document.getElementById("SourceText").value.toString();
	var SourceLanguage = document.getElementById("SourceLanguage");
	SourceLanguage=SourceLanguage.options[SourceLanguage.selectedIndex].value;
	$scope.sourceLang = SourceLanguage;
	var DestinationText=document.getElementById("DestinationText").value.toString();
	var DestinationLanguage = document.getElementById("DestinationLanguage");
	DestinationLanguage =DestinationLanguage.options[DestinationLanguage.selectedIndex].value; */
        
        var SourceText = $scope.sourcetxt;
        var SourceLanguage = $scope.sourceLang;
        
        
        var DestTxt= $scope.desttxt;
        var DestinationLanguage = $scope.destLang;
    
        document.println(SourceText + "" + SourceLanguage + "" + DestTxt + "" + DestinationLanguage);
        
$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20151023T145251Z.bf1ca7097253ff7e.c0b0a88bea31ba51f72504cc0cc42cf891ed90d2&text='+SourceText+'&lang='+SourceLanguage+'-'+DestinationLanguage+'&[format=plain]&[options=1]&[callback=set]').}.success(function(response) {
        $scope.desttxt = response.text;
    //document.getElementById("DestinationText").value=response.text;
        
        }).error(function(response) {
		});
		  
});

