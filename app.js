// import express, { Request, Response, NextFunction } from "express";
// import bodyParser from "body-parser";
// convert the two imports above to javascript requires
const express = require("express");
const bodyParser = require("body-parser");
// import { PurchaseRouter } from "./src/routes/purchaseRouter";
// import { SubscriptionRouter } from "./src/routes/subscriptionRouter";
// import cors from "cors";
const cors = require("cors");
// import jwt from "jsonwebtoken";
// import jwksClient from "jwks-rsa";
// import { CognitoJwtVerifier } from "aws-jwt-verify";
// import dotenv from "dotenv";
// import { AdminRouter } from "./src/routes/adminRouter";
// import { UserRouter } from "./src/routes/userRouter";
// import { AffiliateMarketingRouter } from "./src/routes/affiliateMarketingRouter";
// import { WebhookRouter } from "./src/routes/webhookRouter";
const TranslateRouter = require("./src/routes/translateRouter");

class App {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    // this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, content-type, Accept"
      );
      next();
    });
  }
  routes() {
    // authenticate

    // const authenticate = async (req, res, next) => {
    //   // Verifier that expects valid id tokens:
    //   //   const verifier = CognitoJwtVerifier.create({
    //   //     userPoolId: this.userPoolId,
    //   //     tokenUse: "id",
    //   //     clientId: this.clientId,
    //   //   });
    //   //   const authHeader = req.headers.authorization;
    //   //   if (!authHeader) return res.status(401).send("Unauthorized");
    //   const token = authHeader.split(" ")[1];
    //   try {
    //     const payload = await verifier.verify(token);
    //     req.user = payload;
    //     next();
    //   } catch (e) {
    //     console.log(e);
    //     return res.status(401).send("Unauthorized");
    //   }
    // };

    // initialize the routes
    const translateRouter = new TranslateRouter();

    // use auth
    // translateRouter.router.use(authenticate);
    // create routes
    // this.app.use("/api/user", userRouter.router);
    this.app.use("/api/translate", translateRouter.router);

    this.app.get("/", function (req, res, next) {
      res.send("backend server");
    });
  }
}

module.exports = App;
