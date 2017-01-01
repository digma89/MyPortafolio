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

  app.controller('ProjectsCtrl', ['$scope', '$routeParams', '$timeout', function($scope, $routeParams, $timeout) {
      var projectId = $routeParams.id;

      $scope.backLinkClick = function() {
          $timeout(function() {
              window.location.reload(false);
          }, 250);

      };

      $scope.myInterval = 4000;
      $scope.noWrapSlides = true;
      $scope.active = 0;
      var slides = $scope.slides = [];
      var currIndex = 0;

      if (projectId == 1001) {
          $scope.addSlide = function() {
              var newWidth = 600 + slides.length + 1;
              $scope.info = {
                  proyecto: "Avaluos Naufal Website",
                  app: "A complete and responsive website for the company Avalúos Corporativo Naufal, company that provides valuation and real estate services.",
                  technologies: "NodeJs, HTML5, JQuery, CSS3 and Bootstrap.",
                  link: "https://anaufalv2.herokuapp.com/"
              };

              slides.push({
                  image: '../assets/imgs/slider/Proyecto1/1-1.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto1/1-2.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto1/1-3.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto1/1-4.png',
                  id: currIndex++
              });
          };

      } else if (projectId == 1002) {
          $scope.addSlide = function() {
              var newWidth = 600 + slides.length + 1;
              $scope.info = {
                  proyecto: "Baño SR",
                  app: "Gobierno + Privado",
                  technologies: "Colonia Guerrero México D.F.",
                  link: "16,806 m\u00b2",
                  tipo: "Comercial",
                  estatus: "Proyecto."
              };

              slides.push({
                  image: '../assets/imgs/slider/Proyecto2/2-1.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto2/2-2.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto2/2-3.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto2/2-4.png',
                  id: currIndex++
              });
          };
      } else if (projectId == 1003) {
          $scope.addSlide = function() {
              var newWidth = 600 + slides.length + 1;
              $scope.info = {
                  proyecto: "Torre Guerrero",
                  app: "Gobierno + Privado",
                  technologies: "Colonia Guerrero México D.F.",
                  link: "16,806 m\u00b2",
                  tipo: "Habitacional + Comercial + Cultural",
                  estatus: "Proyecto en concurso - En exposicion Bienal de Arquitectura de Venecia 2014."
              };

              slides.push({
                  image: '../assets/imgs/slider/Proyecto3/3-1.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto3/3-2.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto3/3-3.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto3/3-4.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto3/3-5.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto3/3-6.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto3/3-7.png',
                  id: currIndex++
              });
          };
      } else if (projectId == 1004) {
          $scope.addSlide = function() {
              var newWidth = 600 + slides.length + 1;
              $scope.info = {
                  proyecto: 'Restaurante "Condimento" Marriott ',
                  app: "Gobierno + Privado",
                  technologies: "Colonia Guerrero México D.F.",
                  link: "16,806 m\u00b2",
                  tipo: "Comercial",
                  estatus: "Proyecto entregado."
              };

              slides.push({
                  image: '../assets/imgs/slider/Proyecto4/4-1.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto4/4-2.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto4/4-3.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto4/4-4.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto4/4-5.png',
                  id: currIndex++
              });
          };
      } else if (projectId == 1005) {
          $scope.addSlide = function() {
              var newWidth = 600 + slides.length + 1;
              $scope.info = {
                  proyecto: "Clínica dental Blu",
                  app: "Gobierno + Privado",
                  technologies: "Colonia Guerrero México D.F.",
                  link: "16,806 m\u00b2",
                  tipo: "Comercial",
                  estatus: "Construido."
              };

              slides.push({
                  image: '../assets/imgs/slider/Proyecto5/5-1.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto5/5-2.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto5/5-3.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto5/5-4.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto5/5-5.png',
                  id: currIndex++
              });
          };

      } else if (projectId == 1006) {
          $scope.addSlide = function() {
              var newWidth = 600 + slides.length + 1;
              $scope.info = {
                  proyecto: "Globo Studios",
                  app: "Gobierno + Privado",
                  technologies: "Colonia Guerrero México D.F.",
                  link: "16,806 m\u00b2",
                  tipo: "Diseño de interiores",
                  estatus: "Construido."
              };
              slides.push({
                  image: '../assets/imgs/slider/Proyecto6/6-1.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto6/6-2.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto6/6-3.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto6/6-4.png',
                  id: currIndex++
              });
          };
      } else if (projectId == 1007) {
          $scope.addSlide = function() {
              var newWidth = 600 + slides.length + 1;
              $scope.info = {
                  proyecto: "Terraza Senado",
                  app: "Gobierno + Privado",
                  technologies: "Colonia Guerrero México D.F.",
                  link: "16,806 m\u00b2",
                  tipo: "Mobiliario urbano",
                  estatus: "Concurso."
              };
              slides.push({
                  image: '../assets/imgs/slider/Proyecto7/7-1.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto7/7-2.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto7/7-3.png',
                  id: currIndex++
              });
          };
      } else if (projectId == 1008) {
          $scope.addSlide = function() {
              var newWidth = 600 + slides.length + 1;
              $scope.info = {
                  proyecto: "Oficinas MMM",
                  app: "Gobierno + Privado",
                  technologies: "Colonia Guerrero México D.F.",
                  link: "16,806 m\u00b2",
                  tipo: "Oficinas",
                  estatus: "Proyecto entregado."
              };

              slides.push({
                  image: '../assets/imgs/slider/Proyecto8/8-1.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto8/8-2.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto8/8-3.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto8/8-4.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto8/8-5.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto8/8-6.png',
                  id: currIndex++
              }, {
                  image: '../assets/imgs/slider/Proyecto8/8-7.png',
                  id: currIndex++
              });
          };

      }

      for (var i = 0; i < 1; i++) {
          $scope.addSlide();
      }

  }, ]);