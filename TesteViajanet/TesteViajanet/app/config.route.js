var nastyGlobalReferenceToRouteProvider;

(function () {
    "use strict";
    var app = angular.module("ViajanetApp");

    function getRoutes() {
        var rotas = [
           
            {
                nome: "gitSearch",
                config: {
                    url: "/gitSearch",
                    title: "gitSearch",
                    controller: "gitSearchController",
                    controllerAs: "vm",
                    templateUrl: "app/components/gitSearch/gitSearch/html"
                }
            },
            {
                nome: "gitDetail",
                config: {
                    url: "/gitDetail/:id",
                    title: "gitDetail",
                    controller: "gitDetailController",
                    controllerAs: "vm",
                    templateUrl: "app/components/gitDetail/gitDetail/html"
                }
            }
        ];

        return rotas;
    }

    app.constant("routes", getRoutes());

    // Configure the routes and route resolvers
    function routeConfigurator($routeProvider, routes, $httpProvider) {
        $httpProvider.defaults.cache = false;
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }

        nastyGlobalReferenceToRouteProvider = $routeProvider;
        routes.forEach(function (r) {
            var url = r.config.url;
            $routeProvider.when(url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: "/" });
    }

    app.config(["$routeProvider", "routes", "$httpProvider", routeConfigurator]); // Define the routes 


})();