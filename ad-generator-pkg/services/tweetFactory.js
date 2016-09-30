/**
 * @author Rupesh Malusare
 * @since Sept. 30, 2016
 *
 */
(function(window) {
	"use strict"
	angular.module("tweetApp")
    .factory('tweetFactory',tweetFactory);
    tweetFactory.$inject=['tweetService'];
    function tweetFactory (tweetService) {
    	var vm=this;
    	vm.tweetData={data:[]};
      vm.tweetConfig={};
      vm.tweetConfig=localStorage.getItem('tweetConfig');
      localStorage.setItem('tweetConfig',JSON.stringify(vm.tweetConfig));
    	function init() {
    		 //vm.fetchTweetData();
    	}

       vm.fetchTweetData = function(param) {
          //var param={count:30,screenName:'appdirect'}
           	var fetchTweet=tweetService.tweetApp(param);
       		return fetchTweet.then(function(response){
            vm.tweetData.data =response.data;
       			return response.data
       		},function(reason){
       			console.log(reason.status)
       		});
       }
       vm.saveConfig = function(obj){
         localStorage.setItem('tweetConfig',JSON.stringify(vm.tweetConfig));
       }
       init();
       return vm
    }
}(window));

