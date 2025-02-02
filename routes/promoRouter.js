const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route("/")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res, next) => {
        res.end("Will send all the promotions to you!");
    })
    .post((req, res, next) => {
        res.end("Will add the promotion: " + req.body.name +
            " with details: " + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /promotions");
    })
    .delete((req, res, next) => {
        res.end("Deleting all the promotions");
    });

promoRouter.route("/:promoId")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res, next) => {
        res.end("Will send you all the info about the promotion with ID: " + req.params.promoId);
    })
    .post((req, res, next) => {
        res.end("POST is not supported");
    })
    .put((req, res, next) => {
        res.end("Will update the promotion with ID: " + req.params.promoId +
            " \nnew promotion details: " + " \nname: " + req.body.name +
            " \ndescription: " + req.body.description);
    })
    .delete((req, res, next) => {
        res.end("Will delete the promotion with ID: " + req.params.promoId);
    });

module.exports = promoRouter;