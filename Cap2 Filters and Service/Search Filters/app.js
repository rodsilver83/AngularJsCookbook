/**
 * Created by jose.soria on 06/17/2015.
 */
angular.module('myApp', [])
  .controller('Ctrl', function ($scope) {
    $scope.users = [
      {name: 'Albert Pai'},
      {name: 'Jake Hsu'},
      {name: 'Jack Hanford'},
      {name: 'Scott Robinson'},
      {name: 'Diwank Singh'}
    ];
  });