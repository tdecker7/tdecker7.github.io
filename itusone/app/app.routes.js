angular.module('app.routes', [
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html'
      });

    // pretty urls -- Remove #s
    $locationProvider.html5Mode(true);
  })
