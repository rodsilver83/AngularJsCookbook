/**
 * Created by jose.soria on 06/17/2015.
 */
angular.module('myApp', [])
  .controller('Ctrl', function ($scope) {
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
    ];
    $scope.usermatch = function (user) {
      if (!angular.isDefined(user) ||
        !angular.isDefined($scope.search)) {
        return false;
      }
      var nameMatch = false,
        numberMatch = false;
      if (angular.isDefined($scope.search.name) &&
        $scope.search.name.length > 0) {
        if (angular.isDefined(user.firstName)) {
          nameMatch = nameMatch ||
            user.firstName.indexOf($scope.search.name) > -1;
        }
        if (angular.isDefined(user.lastName)) {
          nameMatch = nameMatch ||
            user.lastName.indexOf($scope.search.name) > -1;
        }
      }
      if (angular.isDefined(user.number) &&
        angular.isDefined($scope.search.number)) {
        numberMatch = user.number === $scope.search.number;
      }
      return nameMatch || numberMatch;
    };
  });
