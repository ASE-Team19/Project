var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
$scope.convertText =function(){
	var SourceText= document.getElementById("SourceText").value.toString();
	var SourceLanguage = document.getElementById("SourceLanguage");
	SourceLanguage=SourceLanguage.options[SourceLanguage.selectedIndex].value;
	$scope.sourceLang = SourceLanguage;
	var DestinationText=document.getElementById("DestinationText").value.toString();
	var DestinationLanguage = document.getElementById("DestinationLanguage");
	DestinationLanguage =DestinationLanguage.options[DestinationLanguage.selectedIndex].value;
    
	$http({
    method: 'GET',
    url : 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170310T171435Z.71ee05394b2de15e.7458d4feed706ef41287d167b9c36f054c982cc8&text='+SourceText+'&lang='+SourceLanguage+'-'+DestinationLanguage+'&[format=plain]&[options=1]&[callback=set]',
    contentType: "application/json"
}).success(function(response) {
        $scope.convertedText = response.text;
    document.getElementById("DestinationText").value=response.text;
        });
};
});