// app.routes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'app/components/home/home.html',
            controller: 'HomeController'
        })

        // drinks page that will use the DrinkController
        .when('/drinks', {
            templateUrl: 'app/components/drink/drinks.html',
            controller: 'DrinkController'
        });

    $locationProvider.html5Mode(true);

}]);