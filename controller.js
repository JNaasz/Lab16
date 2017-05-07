var app = angular.module('redditMod');

app.controller('redditController', function($scope, $http, redditFactory){

   redditFactory.setReddit().then(function(){
   $scope.obj = redditFactory.getReddit();
   console.log($scope.obj[0]);
 });

});


app.directive('redditPost', function() {

  return {
    restrict: 'E',
    replace: false,
    templateUrl: 'redditPost.html'
  }

})
