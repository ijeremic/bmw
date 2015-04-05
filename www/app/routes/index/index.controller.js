import angular from 'angular';

export let indexControllerModule = angular.module('dataControllerModule', []);

dataControllerModule.controller('IndexController', ['$scope', function ($scope) {
  let ctrl = this;

  ctrl.helloWorld = function() {
    $scope.world = "World";
  }
}]);
