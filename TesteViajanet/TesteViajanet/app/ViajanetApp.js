var ViajanetApp = angular.module('ViajanetApp', [
        "ngAnimate",       
        "ngCookies",
        "ngSanitize",
        "ngResource",       // $resource for REST queries
        "ngRoute"          // routing
]);

ViajanetApp.controller('IndexController', IndexController);
ViajanetApp.controller('gitSearchController', gitSearchController);
ViajanetApp.controller('gitDetailController', gitDetailController);

