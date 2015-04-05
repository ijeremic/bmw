import angular from 'angular';
import mocks from 'angular-mocks';
import {mainModule} from './main';

describe('HomeController', function() {
  beforeEach(angular.mock.module(mainModule.name));

  let $controller;

  beforeEach(angular.mock.inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('greetMe should be world', function() {
	let scope = {};
	let controller = $controller('HomeController', { $scope: scope });
	expect(scope.greetMe).to.equal('world');
  });
});
