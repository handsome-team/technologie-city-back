const express = require("express");
const path = require("path");
const router = require("./router/index");
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve("./public")));
app.use(router);

app.listen(9700, () => {
  console.log("http://localhost:9700");
});
