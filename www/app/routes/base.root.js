import angular from 'angular';
import 'angular-ui-router';


alert('x');

export let baseRouteModule = angular.module('baseRouteModule', [
  'ui.router',
]).config([
  '$stateProvider',
  function baseRoute($stateProvider) {

    $stateProvider.state('base', {
      abstract: true,
      views: {
        '': {
          template: '<ui-view></ui-view>'
        }
      },

    });

  }
]);
