var app = angular.module('redditMod');

app.factory('redditFactory', function($http){
  // var
  $http.get('https://www.reddit.com/r/BabyCorgis.json').then(function(response){

    console.log(response.data);
    var redditObject = [];

    function pushReddit(){
      if(response.data.data.children.post_hint === 'image') {
        redditObject.push(response.data.data.children);

      console.log(redditObject);
    }

    return {
    pushReddit: pushReddit
    }

    });
  });
