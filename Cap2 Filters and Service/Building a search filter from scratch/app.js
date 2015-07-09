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
.filter('userSearch', function($log){
    return function(users,search){
      var matches = [];

      // validate enum and search params
      if(!angular.isDefined(users) || !angular.isDefined(search)){
        return false;
      }

      angular.forEach(users, function(user){
        // initialize match conditions
        var nameMatch = false,
          numberMatch = false;
        if(angular.isDefined(search.name) &&
        search.name.length > 0){
          // substring of first or last name will match
          if(angular.isDefined(user.firstName)){
            nameMatch = nameMatch || user.firstName.indexOf(search.name) > -1;
          }
          if(angular.isDefined(user.lastName)){
            nameMatch = nameMatch || user.lastName.indexOf(search.name) > -1;
          }
        }
        if(angular.isDefined(user.number) && angular.isDefined(search.number)){
          numberMatch = user.number === search.number;
        }
        if(nameMatch || numberMatch){
          matches.push(user);
        }
      });
      return matches;
    }
  })