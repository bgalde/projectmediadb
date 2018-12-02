var tables = angular.module('ngrepeatSelect', []);
tables.controller('tableController', function($scope){
        $scope.data = [{name: "Table to Query"}, 
                           {name: "Games",
                                link: "#games"}, 
                           {name: "Video",
                                link: "#video"}, 
                           {name: "Music",
                                link: "#music"}, 
                           {name: "Pictures",
                                link: "#pictures"}, 
                           {name: "Books",
                                link: "#books"}];
   
        $scope.print = function(name) {
                                console.log($scope.data);
                                var t = name;
                                console.log(t);
        }

});
