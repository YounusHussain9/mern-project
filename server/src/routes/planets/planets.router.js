const express = require("express");
//groupinh all planets related routes in this file
const planetsRouter = express.Router();
const { getAllPlanets } = require("./planets.controller");

planetsRouter.get("/planets", getAllPlanets);

module.exports = planetsRouter;
