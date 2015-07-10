/**
 * Created by jose.soria on 06/17/2015.
 */
angular.module('myApp', ['ngAnimate'])
  .controller('Ctrl', function($scope) {
    $scope.arr = [10,15,25,40,45];

    // implementation of Knuth in-place shuffle
    function knuthShuffle(a) {
      for(var i = a.length, j, k; i;
          j = Math.floor(Math.random() * i),
            k = a[--i],
            a[i] = a[j],
            a[j] = k);
      return a;
    };

    $scope.shuffle = function() {
      $scope.arr = knuthShuffle($scope.arr);
    };
  });
