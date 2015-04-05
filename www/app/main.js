import angular from 'angular';
import {indexRouteModule} from './routes/index/index.route';
import 'angular-ui-router';

//import 'app/styles/main.css!';

export let mainModule = angular.module('bmwx', [
	'ui.router',
	indexRouteModule.name
]);
//
// mainModule.controller('HomeController', ['$scope', function ($scope) {
// 	$scope.greetMe = 'world';
// }]);
