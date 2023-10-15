// import router from express
const express = require("express");
// import controller
const TranslateController = require("../controllers/translateController.js");

class TranslateRouter {
  constructor() {
    this.router = express.Router();
    this.translateController = new TranslateController();
    this.initializeRoutes();
  }
  initializeRoutes() {
    this.router.post("/translateMessage", (req, res) => {
      this.translateController.translateMessage(req, res);
    });
  }
}

module.exports = TranslateRouter;
