'use strict';

angular.
module('myApp.view1').
directive('multiplesFactor',() => {
    var controller = ['$scope', function($scope) {
        function init() {
            angular.forEach($scope.datasource, (v,k) => {
                if (v % 4 == 0 && v % 7 == 0) $scope.datasource[k] = 'FIZZBUZZ';
                else if (v % 4 == 0) $scope.datasource[k] = 'FIZZ';
                else if (v % 7 == 0) $scope.datasource[k] = 'BUZZ';
            })
        }

        init();

    }]

    return {
        restrict: 'E',
        scope: {
            datasource: '='
        },
        controller: controller,
    }
}) 