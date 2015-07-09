/**
 * Created by jose.soria on 06/17/2015.
 */
angular.module('myApp',[])
.controller('MainCtrl',function($scope){
    $scope.overwrite = false;
    $scope.origin = 'parent controller';
  })
  .directive('myDirective',function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'my-directive.html',
      link: function(scope){
        scope.overwrite = !!scope.origin;
        scope.origin = 'link functions';
      }
    }
  });