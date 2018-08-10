var gitSearchController = function ($scope, $http) {

    $scope.data = {};
    $scope.url = "https://api.github.com/search/repositories";
    $scope.sort = "";
    $scope.order = "desc";
    $scope.q = "ef";
    $scope.total_count = 0;
    $scope.visualizaResultados = false;

    $scope.search = function () {
        $http.get(this.montaUrl()).then(function (dados) {
            $scope.total_count = dados.data.total_count;
            $scope.data = dados.data.items;
            $scope.visualizaResultados = true;
        })
    }
    $scope.montaUrl=function() {
        var url = $scope.url + "?q=" + $scope.q;
        url += $scope.montaSort();
        url +=$scope.montaOrder();
        return url;
    }
    $scope.montaSort = function () {
        var sort = "&sort=" + $scope.dataSelect.repeatSelect;
        return sort;
    }
    $scope.montaOrder = function () {
        var order = "&order=" + $scope.order;
        return order;
    }

    $scope.dataSelect = {
        repeatSelect: null,
        availableOptions: [
          { id: '1', name: 'Best match', codSearch:'' },
          { id: '2', name: 'Most stars', codSearch: 'stars' },
          { id: '3', name: 'Fewest stars', codSearch: 'stars' },
          { id: '4', name: 'Most forks', codSearch: 'forks' },
          { id: '5', name: 'Fewest forks', codSearch: 'forks' },
          { id: '6', name: 'Recently updated', codSearch: 'updated' },
          { id: '7', name: 'Last recently updated', codSearch: 'updated' }
        ],
    };

}

gitSearchController.$inject = ['$scope', '$http'];