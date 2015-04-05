import angular from 'angular';
//import 'app/styles/main.css!';

export let mainModule = angular.module('bmwx', []);

mainModule.controller('HomeController', ['$scope', function ($scope) {
	$scope.greetMe = 'world';
}]);
