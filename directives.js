var ngApp = angular.module('myApp');

ngApp.directive('personTable' , function(){
	return {
		template: '<p>Maciej lubi <strong>nuggetsy</strong>!</p>'
	}
})