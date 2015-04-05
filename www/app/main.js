import angular from 'angular';
import 'styles/main.css!'

export let mainModule = angular.module('bmwx', []);

mainModule.controller('HomeController', ['$scope', function ($scope) {
	$scope.greetMe = 'world';
}]);
