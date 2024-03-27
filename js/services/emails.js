app.factory('emails', ['$http', function ($http) {
    return $http.get('https://content.codecademy.com/courses/ltp4/emails-api/emails.json')
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.error('Error fetching emails:', error);
            throw error; 
        });
}]);