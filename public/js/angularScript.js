 var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

 app.config(function($routeProvider, $locationProvider) {
     // configure the routing rules here
     $routeProvider.when('/projects/:id', {
         templateUrl: '/templates/projects.html',
         controller: 'ProjectsCtrl'
     });

     // enable HTML5mode to disable hashbang urls
     $locationProvider.html5Mode({
         enabled: true,
         requireBase: false
     });
 });

 app.controller('AlertDemoCtrl', function($scope) {
     $scope.alerts = [
         { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
         { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
     ];

     $scope.addAlert = function() {
         $scope.alerts.push({ msg: 'Another alert!' });
     };

     $scope.closeAlert = function(index) {
         $scope.alerts.splice(index, 1);
     };
 });

 app.controller('ProjectsCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
     var projectId = $routeParams.id;
     console.log(projectId);


     $scope.myInterval = 4000;
     $scope.noWrapSlides = true;
     $scope.active = 0;
     var slides = $scope.slides = [];
     var currIndex = 0;

     if (projectId == 1001) {
         $scope.addSlide = function() {
             var newWidth = 600 + slides.length + 1;
             $scope.info = {
                 proyecto: "CAIS Cuauhtemoc",
                 cliente: "Gobierno + Privado",
                 ubicacion: "Colonia Guerrero México D.F.",
                 area: "16,806 m\u00b2",
                 tipo: "Equipamiento + Habitacional + Deportivo",
                 estatus: "Proyecto en concurso - En exposicion Bienal de Arquitectura de Venecia 2014."
             };

             slides.push({
                 image: '../images/slider/Proyecto1/1-1.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto1/1-2.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto1/1-3.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto1/1-4.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto1/1-5.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto1/1-6.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto1/1-7.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto1/1-8.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto1/1-9.jpg',
                 id: currIndex++
             });
         };

     } else if (projectId == 1002) {
         $scope.addSlide = function() {
             var newWidth = 600 + slides.length + 1;
             $scope.info = {
                 proyecto: "Baño SR",
                 cliente: "Privado",
                 ubicacion: "Colonia San Rafael, México D.F.",
                 area: "30.00 m\u00b2",
                 tipo: "Comercial",
                 estatus: "Proyecto."
             };

             slides.push({
                 image: '../images/slider/Proyecto2/2-1.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto2/2-2.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto2/2-3.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto2/2-4.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto2/2-5.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto2/2-6.jpg',
                 id: currIndex++
             });
         };
     } else if (projectId == 1003) {
         $scope.addSlide = function() {
             var newWidth = 600 + slides.length + 1;
             $scope.info = {
                 proyecto: "Torre Guerrero",
                 cliente: "Privado",
                 ubicacion: "Colonia Guerrero, México D.F.",
                 area: "13,975 m\u00b2",
                 tipo: "Habitacional + Comercial + Cultural",
                 estatus: "Proyecto en concurso - En exposicion Bienal de Arquitectura de Venecia 2014."
             };

             slides.push({
                 image: '../images/slider/Proyecto3/3-1.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto3/3-2.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto3/3-3.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto3/3-4.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto3/3-5.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto3/3-6.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto3/3-7.jpg',
                 id: currIndex++
             });
         };
     } else if (projectId == 1004) {
         $scope.addSlide = function() {
             var newWidth = 600 + slides.length + 1;
             $scope.info = {
                 proyecto: 'Restaurante "Condimento" Marriott ',
                 cliente: "Marriott Reforma",
                 ubicacion: "Paseo de la Reforma #276, México D.F.",
                 area: "315.00 m\u00b2",
                 tipo: "Comercial",
                 estatus: "Proyecto entregado."
             };

             slides.push({
                 image: '../images/slider/Proyecto4/4-1.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto4/4-2.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto4/4-3.jpg',
                 id: currIndex++
             });
         };
     } else if (projectId == 1005) {
         $scope.addSlide = function() {
             var newWidth = 600 + slides.length + 1;
             $scope.info = {
                 proyecto: "Clínica dental Blu",
                 cliente: "Privado",
                 ubicacion: "Colonia Piedad Narvarte, México D.F.",
                 area: "100.00 m\u00b2",
                 tipo: "Comercial",
                 estatus: "Construido."
             };

             slides.push({
                 image: '../images/slider/Proyecto5/5-1.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto5/5-2.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto5/5-3.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto5/5-4.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto5/5-5.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto5/5-6.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto5/5-7.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto5/5-8.jpg',
                 id: currIndex++
             });
         };

     } else if (projectId == 1006) {
         $scope.addSlide = function() {
             var newWidth = 600 + slides.length + 1;
             $scope.info = {
                 proyecto: "Globo Studios",
                 cliente: "Privado",
                 ubicacion: "San Jerónimo, México D.F.",
                 area: "180.00 m\u00b2",
                 tipo: "Diseño de interiores",
                 estatus: "Construido."
             };
             slides.push({
                 image: '../images/slider/Proyecto6/6-1.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto6/6-2.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto6/6-3.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto6/6-4.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto6/6-5.jpg',
                 id: currIndex++
             });
         };
     } else if (projectId == 1007) {
         $scope.addSlide = function() {
             var newWidth = 600 + slides.length + 1;
             $scope.info = {
                 proyecto: "Terraza Senado",
                 cliente: "Público",
                 ubicacion: "Cámara de senadores, México D.F.",
                 area: "300.00 m\u00b2",
                 tipo: "Mobiliario urbano",
                 estatus: "Concurso."
             };
             slides.push({
                 image: '../images/slider/Proyecto7/7-1.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto7/7-2.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto7/7-3.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto7/7-4.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto7/7-5.jpg',
                 id: currIndex++
             });
         };
     } else if (projectId == 1008) {
         $scope.addSlide = function() {
             var newWidth = 600 + slides.length + 1;
             $scope.info = {
                 proyecto: "Oficinas MMM",
                 cliente: "Privado",
                 ubicacion: "La Mora, Hidalgo",
                 area: "105.00 m\u00b2",
                 tipo: "Oficinas",
                 estatus: "Proyecto entregado."
             };

             slides.push({
                 image: '../images/slider/Proyecto8/8-1.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto8/8-2.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto8/8-3.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto8/8-4.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto8/8-5.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto8/8-6.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto8/8-7.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto8/8-8.jpg',
                 id: currIndex++
             }, {
                 image: '../images/slider/Proyecto8/8-9.jpg',
                 id: currIndex++
             });
         };

     }

     for (var i = 0; i < 1; i++) {
         $scope.addSlide();
     }

 }, ]);