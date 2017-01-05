         var myChart = null;

         $(window).load(function() {
             portafolio();
         });

         $(document).ready(function() {
             $('#fullpage').fullpage({
                 verticalCentered: false,
                 /* sectionsColor: ['#34394E', '#34394E', '#D7E3ED', '#34394E'],*/
                 'navigation': true,
                 'navigationPosition': 'right',
                 'navigationTooltips': ['Home', 'About', 'Projects', 'Contact'],
                 fadingEffect: false,
                 //scrollOverflow: true,
                 'afterLoad': function(anchorLink, index) {
                     if (index != 3) {
                         $(".portfolio-item").removeClass("animationSee");
                     }
                     if (index != 2) {
                         $("#cardAbout").removeClass("animationSee");
                         if (myChart != null) {
                             myChart.destroy();
                             myChart = null;
                         }
                     }

                     if (index == 3) {
                         $(".portfolio-item").addClass("animationSee");
                     }

                     if (index == 2) {
                         $("#cardAbout").addClass("animationSee");
                         if (myChart == null) {
                             createChart(5000);
                         }
                     }
                 },
                 'afterResize': function() {

                 },
             });

         });

         function portafolio() {
             'use strict';
             var $portfolio_selectors = $('.portfolio-filter >li>a');
             var $portfolio = $('.portfolio-items');
             $portfolio.isotope({
                 itemSelector: '.portfolio-item',
                 layoutMode: 'fitRows'
             });

             $portfolio_selectors.on('click', function() {
                 $portfolio_selectors.removeClass('active');
                 $(this).addClass('active');
                 var selector = $(this).attr('data-filter');
                 $portfolio.isotope({ filter: selector });
                 return false;
             });
         }

         function createChart(duration = 5000) {
             Chart.defaults.global.animation.duration = 5000;
             var ctx = document.getElementById("myChart");
             myChart = new Chart(ctx, {
                 type: 'radar',
                 scaleStartValue: 0,
                 axisX: {
                     fontSize: 50
                 },
                 data: {
                     labels: ["CSS", "JavaScript", "AngularJs", "NodeJs", "HTML", "JQuery", "PHP", "SQL", ".Net"],
                     fontColor: "#fff",
                     datasets: [{
                         label: "My skills",
                         backgroundColor: "rgba(83,124,205,.4)",
                         borderColor: "rgba(83,124,205,1)",
                         pointBackgroundColor: "rgba(83,124,205,1)",
                         pointBorderColor: "#fff",
                         pointHoverBackgroundColor: "#fff",
                         pointHoverBorderColor: "rgba(83,124,205,1)",
                         data: [100, 90, 85, 80, 100, 90, 80, 85, 70]
                     }],
                 },
                 options: {
                     responsive: true,
                     maintainAspectRatio: false,
                     legend: {
                         display: true,
                         labels: {
                             /* fontColor: '#fff'*/
                         }
                     },

                     scale: {
                         ticks: {
                             /*fontColor: "#fff",*/
                             beginAtZero: true,
                             stepSize: 20,
                             // Return an empty string to draw the tick line but hide the tick label
                             // Return `null` or `undefined` to hide the tick line entirely
                             userCallback: function(value, index, values) {
                                 // Convert the number to a string and splite the string every 3 charaters from the end
                                 value = value.toString();
                                 value = value.split(/(?=(?:...)*$)/);

                                 // Convert the array to a string and format the output
                                 value = value.join('.');
                                 if (value == 20) {
                                     return 'Uh?'
                                 }
                                 if (value == 40) {
                                     return 'Beginner'
                                 }
                                 if (value == 60) {
                                     return 'Average'
                                 }
                                 if (value == 80) {
                                     return 'Pretty Good'
                                 }
                                 if (value == 100) {
                                     return 'Master'
                                 }

                             }
                         }

                     }
                 }
             });
         }