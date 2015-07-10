/**
 * Created by jose.soria on 06/17/2015.
 */
angular.module('myApp',[])
.controller('Ctrl',function($scope){
    $scope.mydata = 'Some scope data';
  });

angular.element(document).ready(function(){
  angular.bootstrap(document.getElementById('child'),['myApp']);
});