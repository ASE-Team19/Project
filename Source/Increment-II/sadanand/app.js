/**
 * Created by sadan on 3/9/2017.
 */

var app=angular.module("Weather",[]);
app.controller("Weathercontroller",function ($scope,$http) {
    $scope.weather = function () {
        var start = document.getElementById('state-input').value;
        var start1 = document.getElementById('city-input').value;
        console.log(5 + 6);
        $http.get('http://api.wunderground.com/api/e9e6428c0bb5f4e4/conditions/q/ ' + start + ' / ' + start1 + ' .json').success(function (data) {
            http://api.wunderground.com/api/e9e6428c0bb5f4e4/conditions/q/TX/dallas.json
                console.log(5 + 9);

            $scope.icon = data.current_observation.icon_url;
            $scope.city = data.current_observation.display_location.city;
            $scope.weathercond = data.current_observation.weather;
            $scope.temp = data.current_observation.temperature_string;
            $scope.humid = data.current_observation.relative_humidity;
            $scope.wind = data.current_observation.wind_mph;
            $scope.feels = data.current_observation.feelslike_string;
            $scope.visibility = data.current_observation.visibility_mi;
            $scope.lat = data.current_observation.observation_location.latitude;
            $scope.long = data.current_observation.observation_location.longitude;
            $scope.url = data.current_observation.forecast_url;


        })
    }

    $scope.completeRegistration = function () {
        var firstname=$scope.data.firstname;
        var lastname=$scope.data.lastname;
        var email=$scope.data.email;
        var password=$scope.data.password;
        var cpassword=$scope.data.cpassword;
        console.log(9)


        $http({
            method: 'POST',

            url: 'https://api.mongolab.com/api/1/databases/harry/collections//users?apiKey=0xCX7-4KL6dGWvAOR5PLzPaC-DtA0KZ4',
            data: JSON.stringify({

                firstname: firstname,
                lastname: lastname,
                email:email,
                password: password,
                cpassword:cpassword,


            }),
            contentType:"application/json"

        }).success(function(data){

            /* if ( data[0].username != null && data[0].password != null && data[0].lastname != null && data[0].firstname != null &&data[0].email != null ) {
             deferred.resolve('Welcome ' + data[0].username + '!');
             } else {
             deferred.reject('please fill all the fields');
             }
             */

        })


    }
    $scope.login = function () {

        console.log(3);
        var name = $scope.data.firstname;
        var pw = $scope.data.password;

        $http({
            method: 'GET',
            url: 'https://api.mongolab.com/api/1/databases/harry/collections/users?q={\"firstname\":\"'+name+'\",\"password\":\"'+pw+'\"}&apiKey=0xCX7-4KL6dGWvAOR5PLzPaC-DtA0KZ4',
            contentType:"application/json"

        }).success(function(data){
            console.log(98)

            if (name == data[0].firstname&&pw==data[0].password){

                deferred.resolve('Welcome ' + data[0].username + '!');
            } else {

                deferred.reject('Wrong credentials.');
            }

        })

        promise.success = function(fn) {
            promise.then(fn);

            return promise;
        }
        promise.error = function(fn) {
            promise.then(null, fn);
            return promise;
        }
        return promise;
    }

})