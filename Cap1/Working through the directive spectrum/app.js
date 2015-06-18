/**
 * Created by jose.soria on 06/17/2015.
 */
angular.module('myApp', [])
	.directive('elementDirective', function ($log) {
		return {
			restrict: 'E',
			replace: true,
			template: '<p>Ze template!</p>',
			link: function(scope, el, attrs) {
				$log.log(el.html());
				// <p>Ze template!</p>
				$log.log(attrs.someAttr);
				// myvalue
			}
		};
	})
	.directive('attributeDirective',function($log){
		return {
			//restrict defaults to A
			restrict: 'A',
			template: '<p>An attribute directive</p>',
			link: function(scope,el,attrs){
				$log.log(el.html());
				$log.log(attrs.attributeDirective);
				$log.log(attrs.someAttr);
			}
		}
	})
	.directive('classDirective', function($log){
		return {
			restrict: 'C',
			template: '<p>A class directive</p>',
			link: function(scope,el,attrs){
				$log.log(el.html());
				$log.log(el.hasClass('normal-class'));
				$log.log(attrs.classDirective);
				$log.log(attrs.someAttr);
			}
		}
	});
