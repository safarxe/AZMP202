const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/productRoute");

const DB_URL =
  "mongodb+srv://safar:safar@cluster0.xsi5e.mongodb.net/";
const PASSWORD = "safar";
const PORT = 8080;
const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use(express.json());
app.use("/api/products", productRouter);

mongoose.connect(DB_URL).then(() => {
  console.log("Connected!");
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
});