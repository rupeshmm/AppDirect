/**
 * @author Rupesh Malusare
 * @since Sept. 30, 2016
 *
 */
(function(window) {
	"use strict"
	angular.module("tweetApp")
    .service('tweetService',tweetService);
    tweetService.$inject=['$http'];
    function tweetService ($http) {
    	var vm=this;
    	var apiServer = "http://localhost:7890";
    	var serviceBaseURL = "/1.1/statuses/user_timeline.json?";
        var serverURL = apiServer + serviceBaseURL;
    	var localURL = "./stub";


    	vm.getServerHttp=function(URL){
            return $http({
                    method: 'GET',
                    url: String(URL),
                    headers: {
                        'Authorization': undefined
                    }
                });
        }
    	vm.tweetApp=function(param){
                 //return $http.get(localURL + '/appd.json');
                 return vm.getServerHttp(serverURL + 'count='+param.count+'&screen_name='+param.screenName);
        };
        
    }
}(window));

