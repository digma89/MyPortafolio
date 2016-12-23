        $(document).ready(function() {


            console.log("test1");
            $('#fullpage').fullpage({
                verticalCentered: true,
                sectionsColor: ['#34394E', '#34394E', '#D7E3ED', '#34394E'],
                'navigation': true,
                'navigationPosition': 'right',
                'navigationTooltips': ['Home', 'Powerful', 'Amazing', 'Simple']
            });
        });