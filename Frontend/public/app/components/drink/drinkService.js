// drinkService.js
angular.module('DrinkService', []).factory('Drink', ['$http', function($http) {

    return {
        // call to get all drinks
        get : function() {
            return $http.get('/api/drinks');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(drinkData) {
            return $http.post('/api/drinks', drinkData);
        },

        // call to DELETE a drink
        delete : function(id) {
            return $http.delete('/api/drinks/' + id);
        }
    }

}]);