import express from "express";
import path from "path";
import bodyParser from "body-parser";

import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackConfig from "../webpack.config.js";

import clickdocs from "./routes/clickdocs";

const app = express();

app.use(bodyParser.json());

const compiler = webpack(webpackConfig);

app.use("/api/clickdocs", clickdocs);

app.use(webpackMiddleware(compiler));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(8080, () => console.log("Running on localhost:8080"));
