var App = angular.module('newApp',['ngRoute']);
App.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		template: 'welcome to homepage',
	})
	.when('/anotherPage',{
		template: 'welcome to another page',
	})
	.otherwise({
		redirectTo: '/',
	});

}]);