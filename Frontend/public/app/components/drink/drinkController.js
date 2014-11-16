// drinkController.js
angular.module('DrinkCtrl', []).controller('DrinkController', function($scope, Drink) {

    //Drink is from the drink service
    Drink.get()
        .success(function(drinks) {
            $scope.drinks = drinks;
        });

});