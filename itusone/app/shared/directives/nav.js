angular.module('navDirective', [])
  .directive('navTemplate', function () {
    return {
      templateUrl: 'app/shared/html/nav.html',
      replace: true
    };
  });
