const express = require("express");
const route_u = express.Router();

const {
  us_Dash,
  us_Des,
  us_About,
  us_Des_detail,
} = require("../controller/controller.Users.js");

route_u.get("/us/dash", us_Dash);
route_u.get("/us/des", us_Des);
route_u.get("/us/about", us_About);
route_u.get("/us/des/detail", us_Des_detail);

module.exports = { route_u };