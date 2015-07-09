/**
 * Created by jose.soria on 06/17/2015.
 */
angular.module('myApp',[])
.controller('Ctrl',function($scope){
    $scope.users = [
      {
        firstName: 'John',
        lastName: 'Stockton',
        number: '12'
      },
      {
        firstName: 'Michael',
        lastName: 'Jordan',
        number: '23'
      },
      {
        firstName: 'Allen',
        lastName: 'Iverson',
        number: '3'
      }
    ]
  })