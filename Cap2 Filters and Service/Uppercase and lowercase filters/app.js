/**
 * Created by jose.soria on 06/17/2015.
 */
angular.module('myApp',[])
.controller('Ctrl',function($scope){
    $scope.data = {
      text: 'the Quick brown Fox Jumps over The LAZY dog.',
      nums: '0123456789',
      specialChars: '!@#$%^&*()',
      whitespace: '    '
    };
  });
