/**
 * Created by jose.soria on 06/17/2015.
 */
angular.module('myApp', [])
  .controller('MainCtrl',function($scope) {
    $scope.data = {
      text: 'Primates',
      items: [
        {
          text: 'Anthropoidea',
          items: [
            {
              text: 'New World Anthropoids'
            },
            {
              text: 'Old World Anthropoids',
              items: [
                {
                  text: 'Apes',
                  items: [
                    {
                      text: 'Lesser Apes'
                    },
                    {
                      text: 'Greater Apes'
                    }
                  ]
                },
                {
                  text: 'Monkeys'
                }
              ]
            }
          ]
        },
        {
          text: 'Prosimii'
        }
      ]
    };
  })
  .directive('tree', function($compile, $templateCache) {
    return {
      restrict: 'E',
      scope: {
        val: '=',
        parentData: '='
      },
      link: function(scope, el, attrs) {
        scope.isParent = angular.isArray(scope.val.items)
        scope.deleteSubtree = function() {
          if(scope.parentData) {
            scope.parentData.splice(
              scope.parentData.indexOf(scope.val),
              1
            );
          }
          scope.val={};
        }
        el.replaceWith(
          $compile(
            $templateCache.get('recursive.html')
          )(scope)
        );
      }
    };
  });

