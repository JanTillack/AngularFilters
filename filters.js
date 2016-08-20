var ngApp = angular.module('myApp');

ngApp.filter('SpecialFilter' , function(){
	return function(text){
		return text.split('').join('*');
	};
})

ngApp.filter('moreSpecialFilter' , function(){
	return function(text, joinMark){
		return text.split('').join(joinMark);
	};
})