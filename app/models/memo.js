// app/models/todo.js

// load mongoose since we need it to define a model
var mongoose = require('mongoose');

module.exports = mongoose.model('Memo', {
    text : String,
    done : Boolean
});
