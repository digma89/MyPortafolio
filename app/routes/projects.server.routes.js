module.exports = function(app) {

    var projects = require('../controllers/projects.server.controller');
    app.get('/projects', projects.render);

};