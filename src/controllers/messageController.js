// import all services up here
const express = require("express");

export class MessageController {
  constructor() {
    this.router = express.Router();
    this.router.post("/send-message", this.sendMessage.bind(this));
  }

  async sendMessage(req, res){}
}
