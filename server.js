process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');
var app = express();

/*
app.use('/about', function(reg, res){
    res.send('Hello about World!!!');
});

app.use('/', function(reg, res){
    res.send('Hello World!!!');
});
*/

/*
app.get('/', function(req, res){
    res.send('This is a GET request');
});

app.post('/', function(req, res){
    res.send('this is a POST request');
});
*/

/*
//same result as above
app.route('/').get(function(req, res){
    res.send('This is a GET request');
}).post(function(req, res){
    res.send('this is a POST request');
});
*/

/*
var hasName = function(req, res, next){
    if(req.param('name')){
        next();
    }else{
        res.send('What is your name?');
    }
};

var sayHello = function(req, res, next){
    res.send('Hello '+ req.param('name'));
};

var app = express();
app.get('/', hasName, sayHello);     
*/



    
app.listen(3000);
console.log('Server running at http://localhost:3000/');