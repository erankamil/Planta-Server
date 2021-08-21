import * as mongoose from "mongoose";
import * as config from "config";
import * as debug from "debug";
require("dotenv").config();

const error = debug("mongooseInit:error");
const log = debug("mongooseInit:log");

const dbConfig = config.get("MongoDB.Configurations") as {
  [key: string]: string;
};
const uri = getUriFromDbConfig(dbConfig);

mongoose.connect(uri, { useNewUrlParser: true }); // connect to db

const db = mongoose.connection;

db.on("error", (err) => {
  error("connection error:", err);
  console.error("connection error:", err);
}).once("open", () => {
  log("DB connection success!");
  process.env.NODE_ENV != "test"
    ? console.log("DB connection success!")
    : undefined;
});

function getUriFromDbConfig(dbConfig: { [key: string]: string }): string {
  const { port, host, database, environment } = dbConfig;
  let pass, user;
  if (environment === "production") {
    user = process.env.PROD_USER;
    pass = process.env.PROD_PASSWORD;
  } else if (environment === "development") {
    user = process.env.DEV_USER;
    pass = process.env.DEV_PASSWORD;
  } else {
    console.log("config environment is not correct");
  }

  const uri = `mongodb+srv://${user}:${pass}@${host}/${database}?retryWrites=true&w=majority`;

  return uri;
}
