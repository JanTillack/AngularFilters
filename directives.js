var ngApp = angular.module('myApp');

ngApp.directive('personTable' , function(){
	return {
		templateUrl: 'table.html',
	}
})