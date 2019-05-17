'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$filter', function($scope, $filter) {
  console.log('test');
  $scope.numList = [];
  for (let i=1; i<=60; i++)
    $scope.numList.push(i); 
}])
