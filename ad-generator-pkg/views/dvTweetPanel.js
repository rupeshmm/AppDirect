/**
 * @author Rupesh Malusare
 * @since Sept. 30, 2016
 *
 */
(function (window) {
    'use strict';
angular.module('tweetApp')
    .directive('dvTweetPanel', dvTweetPanel);
    dvTweetPanel.$inject=[];
    function dvTweetPanel(){
        return {
        	restrict: 'A',
            scope: {
    	        tweetCollection:'=',
                titlePanel:"="
    	    },
            bindToController : true,
            templateUrl:'./views/templates/tweet.panel.tpl.html',
            controller: 'dvTweetPanelCtrl',
            controllerAs:'vm'
        }
    }
}(window));