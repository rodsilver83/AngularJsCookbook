/**
 * Created by jose.soria on 06/17/2015.
 */
angular.module('myApp', ['ngAnimate', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/bar', {
        templateUrl: 'bar.html'
      })
      .otherwise({
        templateUrl: 'foo.html'
      });
  });
