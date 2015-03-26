angular.module('app')
.controller('ApplicationCtrl', ['$scope', '$location', function ($scope, $location) {
  $scope.$on('login', function (_, user) {
    $scope.currentUser = user

      // Redirect to posts
      $location.path('/');
  })
    $scope.$on('ask', function(_, user){
        $location.path('/');
    })
}])
