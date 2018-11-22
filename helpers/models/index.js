let mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://dev-data:skywindprojects1@ds247290.mlab.com:47290/live-projects');

mongoose.Promise = Promise;
module.exports.Todo = require("./todoModel");