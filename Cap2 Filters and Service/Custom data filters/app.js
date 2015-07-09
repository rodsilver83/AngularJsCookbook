/**
 * Created by jose.soria on 06/17/2015.
 */
angular.module('myApp',[])
  .controller('Ctrl',function($scope){
    $scope.myText = 'Authentic leggings jean shorts Austin narwhal crucifix messenger bag, tofu butcher drinking' +
      ' vinegar bespoke PBR&B High Life. Flexitarian migas put a bird on it, organic sartorial pork belly bespoke street art stumptown mlkshk selfies try-hard. Keffiyeh Austin ennui, kitsch disrupt mustache hella scenester. Forage ugh gentrify deep v leggings street art. Mlkshk put a bird on it chia, leggings ugh selvage jean shorts roof party bicycle rights taxidermy. Authentic fixie put a bird on it Pinterest, small batch plaid hoodie. Yr Echo Park ethical Wes Anderson, actually fixie tofu occupy scenester Brooklyn typewriter Banksy pickled cold-pressed kitsch.';
  })
.filter('simpletruncate',function(){
    return function(text){
      var truncated = text.slice(0,100);
      if(text.length > 100){
        truncated += '...';
      }
      return truncated;
    };
  })
  .filter('regextruncate',function(){
    return function(text,limit,stoptext){
      var regex = /\s/;
      if(!angular.isDefined(limit)){
        limit = 100;
      }
      if(!angular.isDefined(stoptext)){
        stoptext += '...';
      }
      limit = Math.min(limit,text.length);
      for(var i=0; i<limit; i++){
        if(regex.exec(text[limit-i])
          && !regex.exec(text[(limit-i)-1])){
          limit = limit-i;
          break;
        }
      }
      var truncated = text.slice(0,limit);
      if(text.length > limit){
        truncated += stoptext;
      }
      return truncated;
    };
  });