// drinkService.js
angular.module('DrinkService', []).factory('Drink', ['$http', function($http) {

    return {
        // call to get all drinks
        get : function() {
            return $http.get('/api/drinks');
            //return $http.get('http://addb.absolutdrinks.com/drinks/?apiKey=0885de049d3847a7bc06842c5f9ba6c7');
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