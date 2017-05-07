var app = angular.module('redditMod');

app.controller('redditController', function($scope, $http, redditFactory){

   $scope.obj = redditFactory.pushReddit();

});


app.directive('redditPost', function() {

  return {
    restrict: 'E',
    replace: false,
    templateUrl: 'redditPost.html'
  }

})
