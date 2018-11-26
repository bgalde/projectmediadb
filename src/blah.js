var tables = angular.module('ngrepeatSelect', []);
tables.controller('tableController', function($scope){
  for (var item in data){
    for (var key in item) {
      $scope.options.append({name: item[key]});
    }
  }
   
  $scope.print = function(name) {
        console.log($scope.options);
        var t = name;
        console.log(t);
  }

});
