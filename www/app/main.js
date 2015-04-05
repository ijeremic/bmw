import angular from 'angular';
import {indexRootModule} from './routes/index/index.route';

//import 'app/styles/main.css!';

export let mainModule = angular.module('bmwx', [
	indexRootModule.name
]);

mainModule.controller('HomeController', ['$scope', function ($scope) {
	$scope.greetMe = 'world';
}]);
