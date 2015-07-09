/**
 * Created by jose.soria on 06/17/2015.
 */
angular.module('myApp',[])
  .controller('Ctrl',function($scope){
    $scope.data = {
      bignum: 1000000,
      num: 1.0,
      smallnum: 0.999,
      tinynum: 0.0000001
    };
  });
