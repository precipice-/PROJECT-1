// app/routes.js

// load the memo model
var Memo = require('./models/memo');

// expose the routes to our app with module.exports
module.exports = function(app) {

    // api ---------------------------------------------------------------------
    // get all memos
    app.get('/api/memos', function(req, res) {

        // use mongoose to get all memos in the database
        Memo.find(function(err, memos) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(memos); // return all memos in JSON format
        });
    });

    // create memo and send back all memos after creation
    app.post('/api/memos', function(req, res) {

        // create a memo, information comes from AJAX request from Angular
        Memo.create({
            text : req.body.text,
            done : false
        }, function(err, memo) {
            if (err)
                res.send(err);

            // get and return all the memos after you create another
            Memo.find(function(err, memos) {
                if (err)
                    res.send(err)
                res.json(memos);
            });
        });

    });

    // delete a memo
    app.delete('/api/memos/:memo_id', function(req, res) {
        Memo.remove({
            _id : req.params.memo_id
        }, function(err, memo) {
            if (err)
                res.send(err);

            // get and return all the memos after you create another
            Memo.find(function(err, memos) {
                if (err)
                    res.send(err)
                res.json(memos);
            });
        });
    });
};
