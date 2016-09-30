/**
 * @author Rupesh Malusare
 * @since Sept. 30, 2016
 *
 */
(function(window) {
	"use strict"
	angular.module("tweetApp")
    .controller('tweetCtrl',tweetCtrl);
    tweetCtrl.$inject=['$scope','tweetFactory'];
    function tweetCtrl ($scope,tweetFactory) {
    	var vm=$scope;
    	vm.tweetCollection=[];
        vm.getItemDate=getItemDate;
        vm.titleColl=[];
        vm.selectedName="";
        vm.tweetPanelOrder=1;
        vm.tweetCount=30;
        vm.selectA=["Appdirect","LaughingsSquid","TechCrunch"];
        vm.changePanel=changePanel;
    	function init(){
    		tweetFactory.fetchTweetData({count:30,screenName:'appdirect'}).then(function(response){
    			vm.tweetCollection[0]=response;
    		});

            tweetFactory.fetchTweetData({count:30,screenName:'laughingsquid'}).then(function(response){
                vm.tweetCollection[1]=response;
            });

            tweetFactory.fetchTweetData({count:30,screenName:'techcrunch'}).then(function(response){
                vm.tweetCollection[2]=response;
            });
            vm.titleColl=[{name:"Appdirect",count:30,indexN:0},{name:"LaughingsSquid",count:30,indexN:1},{name:"TechCrunch",count:30,indexN:2}];
            vm.selectedName="Appdirect";
    	}

        function getItemDate(valDate){
            return moment(valDate).fromNow() +" ( "+moment(valDate).format("MMM DD")+" )"
        }

        function changePanel(){
            var indexC=0;
            angular.forEach(vm.titleColl, function(value, key) {
                if(value.name===vm.selectedName){
                    console.log(vm.tweetPanelOrder-1+":::"+key);
                   indexC=key;
                }
            });
            if(indexC){
                var oldObj=vm.titleColl[vm.tweetPanelOrder-1];
                var newObj=vm.titleColl[vm.indexC];
                
                vm.titleColl[vm.tweetPanelOrder-1]=newObj;
                vm.titleColl[indexC]=newObj;
            }
            console.log(vm.titleColl);
        }


    	init();
    }
}(window));

