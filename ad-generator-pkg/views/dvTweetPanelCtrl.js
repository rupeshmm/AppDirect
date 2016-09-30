/**
 * @author Rupesh Malusare
 * @since Sept. 30, 2016
 *
 */
(function (window) {
    'use strict';
angular.module('tweetApp')
	.controller('dvTweetPanelCtrl', dvTweetPanelCtrl);
	dvTweetPanelCtrl.$inject=['$scope'];
	function dvTweetPanelCtrl($scope){
	 	var vm=$scope;
        vm.getItemDate=getItemDate;
	 	function getItemDate(valDate ){
           return moment(valDate).fromNow() +" ( "+moment(valDate).format("MMM DD")+" )"
        }
	 }
}(window));