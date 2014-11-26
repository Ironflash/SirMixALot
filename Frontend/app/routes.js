// app/routes.js

// grab the drink model we just created
var express  = require('express');
var Drink = require('./models/drink');

    module.exports = function(app) {

        // ROUTES FOR OUR API
        // =============================================================================

        // create our router
        var router = express.Router();

        // middleware to use for all api requests
        router.use(function(req, res, next) {
            // do logging
            console.log('Something is happening.');
            next();
        });

        // on routes that end in /drinks
        // ----------------------------------------------------
        router.route('/drinks')

            //create a drink (accessed at POST http://localhost:8080/api/drinks)
            .post(function(req, res) {

                Drink.create({
                    name: req.body.name
                }, function(err, post) {
                    if(err)
                        res.send(err);

                        res.json({ message: 'Drink created!' });
                });


            })

            // get all the drinks (accessed at GET http://localhost:8080/api/drinks)
            .get(function(req, res) {
                // // use mongoose to get all drinks in the database
                Drink.find(function(err, drinks) {

                     // if there is an error retrieving, send the error.
                     // nothing after res.send(err) will execute
                     if (err)
                         res.send(err);

                     res.json(drinks); // return all drinks in JSON format
                });


            });

        // on routes that end in /drinks/:drink_id
        // ----------------------------------------------------
        router.route('/drinks/:drink_id')

            // get the drink with that id
            .get(function(req, res) {
                Drink.findById(req.params.drink_id, function(err, drink) {
                    if (err)
                        res.send(err);
                    res.json(drink);
                });
            })

            // update the drink with this id
            .put(function(req, res) {
                Drink.findById(req.params.drink_id, function(err, drink) {

                    if (err)
                        res.send(err);

                    drink.name = req.body.name;
                    drink.save(function(err) {
                        if (err)
                            res.send(err);

                        res.json({ message: 'Drink updated!' });
                    });

                });
            })

            // delete the drink with this id
            .delete(function(req, res) {
                Drink.remove({
                    _id: req.params.drink_id
                }, function(err, drink) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Successfully deleted' });
                });
            });


        // REGISTER OUR ROUTES -------------------------------
        app.use('/api', router);

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/index.html'); // load our public/index.html file
        });

    };