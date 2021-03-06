var ngApp = angular.module('myApp');

ngApp.directive('personRow' , function(){
	return {
		templateUrl: 'personrow.html',
		restrict: 'A',
		scope: {
			'personData': '='
		},
		controller: function($scope){
			console.log($scope.persondata);
		}
	}
})


ngApp.directive('personTable' , function(){
	return {
		templateUrl: 'table.html',
		scope: {},
		controller: function($scope){
			$scope.start = 0;
			$scope.count = 5;

$scope.personArray =
			[
			{
				"eyeColor": "green",
				"name": "Claire Roy",
				"gender": "female"
			},
			{
				"eyeColor": "blue",
				"name": "Henson Campos",
				"gender": "male"
			},
			{
				"eyeColor": "green",
				"name": "Hendrix Freeman",
				"gender": "male"
			},
			{
				"eyeColor": "brown",
				"name": "Victoria Bishop",
				"gender": "female"
			},
			{
				"eyeColor": "brown",
				"name": "Tanya Bradley",
				"gender": "female"
			},
			{
				"eyeColor": "green",
				"name": "Effie Macias",
				"gender": "female"
			},
			{
				"eyeColor": "blue",
				"name": "Pam Hartman",
				"gender": "female"
			},
			{
				"eyeColor": "blue",
				"name": "Pena Mcfarland",
				"gender": "male"
			},
			{
				"eyeColor": "green",
				"name": "Paul Sparks",
				"gender": "male"
			},
			{
				"eyeColor": "green",
				"name": "Dianne Strickland",
				"gender": "female"
			},
			{
				"eyeColor": "green",
				"name": "Tasha Harris",
				"gender": "female"
			},
			{
				"eyeColor": "brown",
				"name": "Williams Martin",
				"gender": "male"
			},
			{
				"eyeColor": "green",
				"name": "Maldonado Gill",
				"gender": "male"
			},
			{
				"eyeColor": "green",
				"name": "Vargas Strong",
				"gender": "male"
			},
			{
				"eyeColor": "green",
				"name": "Angelita Barnett",
				"gender": "female"
			},
			{
				"eyeColor": "brown",
				"name": "Kirkland Mcintosh",
				"gender": "male"
			},
			{
				"eyeColor": "blue",
				"name": "Eliza Richardson",
				"gender": "female"
			},
			{
				"eyeColor": "green",
				"name": "Mindy Watts",
				"gender": "female"
			},
			{
				"eyeColor": "brown",
				"name": "Michelle Hensley",
				"gender": "female"
			},
			{
				"eyeColor": "blue",
				"name": "Isabella Clements",
				"gender": "female"
			}
			]
		}

	}
})