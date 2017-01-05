exports.render = function(req, res) {
    res.render('index', {
            title: "Portfolio"
        })
        //res.send('Hello World Hello World controoooolller');
};

exports.contactForm = function(req, res) {

    var nodemailer = require('nodemailer');
    var mg = require('nodemailer-mailgun-transport');
    // This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
    var auth = {
        auth: {
            api_key: 'key-b2d52c4ec4e4f669aa319ba1b357ec11',
            domain: 'sandbox7c03b0486de94c0299782e6f4b4563bf.mailgun.org'
        }
    }
    var transporter = nodemailer.createTransport(mg(auth));

    var data = req.body;

    var mailOptions = {
        from: "diego@rz.com",
        to: 'digma89@hotmail.com',
        subject: 'Mensaje de: ' + data.inputName + ' Asunto: ' + data.inputSubject,
        text: 'Mensaje de ' + data.inputName + '\n Asunto: ' + data.inputSubject + '\n Email: ' + data.inputEmail + '\n Mensaje: ' + data.inputMessage
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.send('error');
            return console.log(error);
        } else {
            res.render('index', {
                title: "Portfolio"
            });
        }

    });

};