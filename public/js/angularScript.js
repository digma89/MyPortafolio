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
                  proyecto: "Avalúos Corporativo Naufal Website",
                  app: "A complete responsive website for the company Avalúos Corporativo Naufal, company that provides valuation and real estate services.",
                  technologies: "HTML5, CSS3, NodeJs, JQuery and Bootstrap.",
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
                  proyecto: "Lost Sword",
                  app: "Interactive fiction game, coded with impress.js presentation framework, based on the power of CSS3 transforms and transitions.",
                  technologies: "HTML5, CSS3, JavaScript, Impress.js.",
                  link: "http://digma89.github.io/The_lost_sword/The_Lost_Sword/index.html"
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
                  proyecto: "T8cho Website",
                  app: "A complete responsive website for the company T8cho, company of architects and interior designers.",
                  technologies: "HTML5, CSS3, NodeJs, AngularJs and Bootstrap.",
                  link: "https://t8cho.herokuapp.com/"
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
                  proyecto: 'Old Portfolio',
                  app: "My first portfolio, just playing around with NodeJs and Bootstrap.",
                  technologies: "HTML5, CSS3, NodeJs and Bootstrap.",
                  link: "https://dr-old-portfolio.herokuapp.com/",
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
                  proyecto: "Alien Quest",
                  app: "2D platformer with three different levels, your character is an alien and the goal of the game is pick as much coins as you can.",
                  technologies: "C#, Unity.",
                  link: "http://alienquest.azurewebsites.net/"
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
                  proyecto: "T&J Chase",
                  app: "Side-scrolling web video game with three levels of difficulty, based on the Tom and Jerry adventures.",
                  technologies: "CreateJs, JavaScript, TypeScript.",
                  link: "http://tandj.azurewebsites.net/"
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
                  proyecto: "MP3 Setter",
                  app: "Java program to set the MP3 tags of a group of files according to the filenames, or change the file's name according to their MP3 tags. Useful to organize your music library.",
                  technologies: "Java, Maven, mp3agic Java library.",
                  link: "https://github.com/digma89/JAVA_MP3_MetaSetter"
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
                  proyecto: "Samsung Heroes",
                  app: "Two Android applications one for a smartphone or tablet the other one for the Samsung printer series MX7 and a cloud server used to store PDF files. The project was developed for Samsung, the android apps are capable to store PDF files in the cloud and is also accesible via web.  The users can access the files through their smartphone or tablet and print it at anytime, because it sends the files through internet. (Won the technology fair. April 2016).",
                  technologies: "Android, JavaEE, MongoDB and WildFly application server.",
                  link: ""
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