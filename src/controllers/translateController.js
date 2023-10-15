// import all services up here
const express = require("express");
const TranslateService = require("../services/translateService.js");

class TranslateController {
  constructor() {
    this.router = express.Router();
    this.response = express.response;
    this.response.contentType("application/json");
    this.router.post("/translateMessage", this.translateMessage.bind(this));
    this.translateService = TranslateService.getInstance();
  }

  async translateMessage(req, res) {
    console.log("before translation", req);
    try {
      const translation = await this.translateService.translateText(
        req.body.message.text,
        "ar"
      );
      console.log(translation);
      console.log("after translation", req.body);
      req.body.message.text = translation;
      console.log("again", req.body);
      res = req.body;
      //   express.response.sendStatus(200).json({ res });
      this.response.sendStatus(200);
      return;
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
      return;
    }
  }
}

module.exports = TranslateController;

// body: {
//     message: {
//       attachments: [],
//       id: 'Omar-c8f69333-7ca5-4a33-187a-62a0298b71da',
//       mentioned_users: [],
//       text: 'new message'
//     }
//   },
