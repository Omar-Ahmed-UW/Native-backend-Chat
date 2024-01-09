// import all services up here
const express = require("express");
const TranslateService = require("../services/translateService.js");

class TranslateController {
  constructor() {
    this.router = express.Router();
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
      const response = req.body;
      //   express.response.sendStatus(200).json({ res });
      //   res.sendStatus(200);
      res.status(200).json(response);
      return res;
    } catch (error) {
      console.error(error);
      res.status(500);
      return res;
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
