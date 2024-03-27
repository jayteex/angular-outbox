app.controller('HomeController', ['$scope', 'emails', function ($scope, emails) {
    emails.then(function (data) {
        $scope.emails = data;
    }).catch(function (error) {
        console.error('Error fetching emails:', error);
    });
}]);