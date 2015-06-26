/**
 * Created by jose.soria on 06/17/2015.
 */
angular.module('myApp', [])
  .directive('parentDirective', function ($log) {
    return {
      controller: function () {
        this.identify = function () {
          $log.log('Parent!');
        };
      }
    };
  })
  .directive('siblingDirective', function ($log) {
    return {
      controller: function () {
        this.identify = function () {
          $log.log('Sibling!');
        };
      }
    };
  })
  .directive('childDirective', function ($log) {
    return {
      require: [
        '^parentDirective',
        '^siblingDirective',
        '^?missingDirective'
      ],
      link: function (scope, el, attrs, ctrls) {
        ctrls[0].identify();
        // Parent!
        ctrls[1].identify();
        // Sibling!
        $log.log(ctrls[2]);
        // null
      }
    };
  });
