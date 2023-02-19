const express = require("express");
const router = require("./controllers/getuser");

const app = express();

app.use(express.json());

app.use("/", router);

app.get("/", (req, res) => res.send("asd"));

app.listen(4000, () => {
  console.log("started at port 4000");
});
