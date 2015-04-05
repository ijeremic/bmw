import angular from 'angular';
import 'angular-ui-router';
import template from './index.template.html!text';
import {baseRouteModule} from 'app/routes/base.route';
import {indexControllerModule} from './index.controller';

export let indexRouteModule = angular.module('indexRouteModule', [
  'ui.router',
  baseRouteModule.name,
  indexControllerModule.name
]).config(['$stateProvider', function indexRoute($stateProvider) {
    $stateProvider.state('base.index', {
      url: '/index',
      template: template,
      controller: 'IndexController',
      controllerAs: 'index'
    });
  }
]);