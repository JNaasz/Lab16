var app = angular.module('redditMod');

app.factory('redditFactory', function($http){
  // var
  $http.get('https://www.reddit.com/r/BabyCorgis.json').then(function(response){
    console.log(response.data);
  })
})
