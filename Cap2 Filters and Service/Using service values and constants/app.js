/**
 * Created by jose.soria on 06/17/2015.
 */
angular.module('myApp', [])
  .controller('Ctrl', function($scope, MyValue) {
    $scope.data = MyValue;
    $scope.update = function() {
      MyValue.name = 'Brandon Marshall';
    };
  })
  .value('MyValue', {
    name: 'Tim Tebow',
    number: 15
  });