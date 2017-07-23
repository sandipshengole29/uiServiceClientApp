/**
 * 
 */
app.controller('xmlPocPageController', function($scope, $location, $http, $state, xmlPocPageService) {
	$scope.initData = function() {
		//alert("Load initial data...");
	};
	
	$scope.readDataFromFlatFile = function(){
		xmlPocPageService.getFileData(url, function(result) {
			alert("In-progress!!!");
		});
	};
	
	$scope.showDataOfFlatFile = function(){
		alert("in-progress!!!!");
	};
});