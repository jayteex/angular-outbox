app.controller('EmailController', ['$scope', 'emails', '$routeParams', function ($scope, emails, $routeParams) {
    emails.then(function (data) {
        $scope.email = data[$routeParams.id];
    }).catch(function (error) {
        console.error('Error fetching emails:', error);
    });
}]);