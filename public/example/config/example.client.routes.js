angular.module('example').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '/example/views/partials/home.client.view.html',
                activetab: '1' 
            }).
            otherwise({
                redirecTo: '/'
            });
    }
]);

