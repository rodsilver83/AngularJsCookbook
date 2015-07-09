/**
 * Created by jose.soria on 06/17/2015.
 */
angular.module('myApp',[])
.controller('Ctrl',function($scope){
    $scope.data = {
      unix: 1394787566535,
      iso: '2014-03-14T08:59:26Z',
      date: new Date(2014,2,14,1,59,26,535)
    };
  });