angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


  .controller('LoginCtrl', function($scope, $stateParams) {

    })
  .controller('RegisterCtrl', function($scope, $stateParams) {
  })
  .controller('HomeCtrl', function($scope, $stateParams) {
  })
  .controller('MainCtrl', function($scope,$state ) {
    $scope.gowea = function() {
      $state.go('app.weather');

    }
  })

  .controller('WeatherCtrl', function($scope,$http ) {

    $scope.weather = function () {
      var start = document.getElementById('state').value;
      console.log(start)
      var start1 = document.getElementById('city').value;
      console.log(start1)
      $http.get('http://api.wunderground.com/api/e9e6428c0bb5f4e4/conditions/q/ ' + start + ' / ' + start1 + ' .json').success(function (data) {
        http://api.wunderground.com/api/e9e6428c0bb5f4e4/conditions/q/TX/dallas.json
          console.log(5 + 9);

        $scope.city = data.current_observation.display_location.city;
        console.log( $scope.city)
        $scope.weathercond = data.current_observation.weather;
        $scope.temp = data.current_observation.temperature_string;
        $scope.humid = data.current_observation.relative_humidity;
        $scope.wind = data.current_observation.wind_mph;
        $scope.feels = data.current_observation.feelslike_string;


      })
    }


  })
      .controller('LandingCtrl', function ($scope, $state) {
        $scope.login1 = function () {
          $state.go('app.login');

        }

        $scope.register1 = function () {
          $state.go('app.register');
        }
      })


      .controller('PlaylistCtrl', function ($scope, $stateParams) {
      })

