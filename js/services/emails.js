app.factory('emails', ['$http', function ($http) {
    return $http.get('https://content.codecademy.com/courses/ltp4/emails-api/emails.json')
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            // Handle error
            console.error('Error fetching emails:', error);
            throw error; // Rethrow the error to propagate it to the caller
        });
}]);