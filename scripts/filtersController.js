var filtersApp = angular.module('filtersApp', []);

filtersApp.filter("removeHtml", function(){
    return function(texto) {
        return String(texto).replace(/<[^>]+>/gm,'');        
    }
});
filtersApp.controller("filtersController", function($scope) {
    $scope.myHtml = {};
    $scope.myHtml.title = "Hello";
    $scope.myHtml.body = "Hello World";
    $scope.costo = 3;
});