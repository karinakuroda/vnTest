var gitDetailController = function ($scope, $route, $http) {
    $scope.url = "https://api.github.com/repositories";
    $scope.id = $route.current.params.id

    $http.get($scope.url + "/" + $scope.id).then(function (dados) {
        $scope.data = dados.data;
    })

    //$scope.montaUrl = function () {
    //    var url = $scope.url + "/" + $scope.id;
    //    return url;
    //}
    

}

gitDetailController.$inject = ['$scope', '$route', '$http'];