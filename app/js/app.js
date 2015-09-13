var app = angular.module('personelPageApp',['appControllers','ngRoute']);
app.config(['$routeProvider',function ($routeProvider) {
	$routeProvider
		.when('/',{
			templateUrl : 'app/partials/home.html',
			controller : 'MainCtrl'
		})
		.when('/profile',{
			templateUrl : 'app/partials/profile.html',
			controller : 'ProfileCtrl'		
		})
		.when('/about',{
			templateUrl : 'app/partials/about.html',
			controller : 'AboutCtrl'
		})
		.when('/portfolio',{
			templateUrl : 'app/partials/portfolio.html',
			controller : 'PortfolyoCtrl'
		})
		.when('/contact',{
			templateUrl : 'app/partials/contact.html',
			controller : 'IletisimCtrl'
		})
		.otherwise({
			redirectTo : '/'
		});
}]);