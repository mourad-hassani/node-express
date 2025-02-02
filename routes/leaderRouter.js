const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());


leaderRouter.route("/")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res, next) => {
        res.end("Will send all the leaders to you!");
    })
    .post((req, res, next) => {
        res.end("Will add the leader: " + req.body.name +
            " with details: " + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /leaders");
    })
    .delete((req, res, next) => {
        res.end("Deleting all the leaders");
    });

leaderRouter.route("/:leaderId")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res, next) => {
        res.end("Will send you all the info about the leader with ID: " + req.params.leaderId);
    })
    .post((req, res, next) => {
        res.end("POST is not supported");
    })
    .put((req, res, next) => {
        res.end("Will update the leader with ID: " + req.params.leaderId +
            " \nnew leader details: " + " \nname: " + req.body.name +
            " \ndescription: " + req.body.description);
    })
    .delete((req, res, next) => {
        res.end("Will delete the leader with ID: " + req.params.leaderId);
    });

module.exports = leaderRouter;