angular.module('homeDirective', [])
  .directive('home', function () {
    return {
      templateUrl: 'home.html',
      replace: true
    };
  });
