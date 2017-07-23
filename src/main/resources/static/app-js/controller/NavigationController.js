/**
 * 
 */
app.controller('navigationController', function($scope, $location, $http, $state) {
	$scope.loadLandingPage = function(event, linkNumber) {
		event.preventDefault();
		$state.go("landing-page");
		$scope.manageActive(linkNumber);
	};
	
	$scope.loadShortCutPage = function(event, linkNumber) {
		event.preventDefault();
		$state.go("xmlPocStart-page");
		$scope.manageActive(linkNumber);		
	};
	
	$scope.loadOverviewPage = function(event, linkNumber) {
		event.preventDefault();
		$state.go("landing-page");
		$scope.manageActive(linkNumber);
	};
	
	$scope.loadEventPage = function(event, linkNumber) {
		event.preventDefault();
		$state.go("landing-page");
		$scope.manageActive(linkNumber);
	};
	
	$scope.loadAboutPage = function(event, linkNumber) {
		event.preventDefault();
		$state.go("landing-page");
		$scope.manageActive(linkNumber);
	};
	
	$scope.loadServicePage = function(event, linkNumber) {
		event.preventDefault();
		$state.go("landing-page");
		$scope.manageActive(linkNumber);
	};
	
	$scope.loadContactPage = function(event, linkNumber) {
		event.preventDefault();
		$state.go("landing-page");
		$scope.manageActive(linkNumber);
	};
	
	$scope.manageActive = function(linkNumber){
		for(var i=1;i<=7;i++){
			if(i===linkNumber){
				var eleId = "#li_"+i
				var selectedElement1 = angular.element(document.querySelector(eleId));
				selectedElement1.attr("class","active");
			}else{
				var eleId = "#li_"+i
				var selectedElement1 = angular.element(document.querySelector(eleId));
				selectedElement1.attr("class","noactive");
			}
		}
	}
});