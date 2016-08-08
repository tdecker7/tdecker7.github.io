angular.module('app.routes', [
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html'
      })
      .when('/product', {
        templateUrl: 'app/product/product.html'
      })
      .when('/team', {
        templateUrl: 'app/team/team.html'
      })
      .when('/contact', {
        templateUrl: 'app/contact/contact.html'
      });

    // pretty urls -- Remove #s
    $locationProvider.html5Mode(true);
  })
