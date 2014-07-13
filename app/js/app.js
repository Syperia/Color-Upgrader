angular.module('cu', [])
.factory('Colors',['$http', function($http){
    return {
        get: function(language){
            return $http.get("json/colors_" + language + ".json");
        }
    }
}])
.controller('cuCtrl', ['$scope','Colors', function($scope,Colors) {
    Colors.get('en').then(function(response){
        $scope.colorSets = response.data;
    });
    $scope.colorSet = {};
    $scope.color = {};
    $scope.selectSet = function(index){
        $scope.colorSet = $scope.colorSets[index];
        $scope.nextColor();
    }
    $scope.nextColor = function(){
        var randomNumber = Math.floor(Math.random()*$scope.colorSet.colors.length);
        $scope.color = $scope.colorSet.colors[randomNumber];
    }
    $scope.keyPrress = function(ev) {
        if (ev.which==39)//left arrow
            $scope.nextColor();
        };
}]);
