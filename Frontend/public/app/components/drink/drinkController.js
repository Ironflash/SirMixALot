// drinkController.js
angular.module('DrinkCtrl', []).controller('DrinkController', function($scope, Drink) {

    //Drink is from the drink service
    Drink.get()
        .success(function(drinks) {
            //var jsonObject = JSON.parse(drinks);
            //$scope.drinks = jsonObject.getElementById("result");
            $scope.drinks = drinks;
        });

});