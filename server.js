const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./src/config/db");
const apiRoutes = require("./src/routes/api");
const cors = require("cors");
const path = require("path");
const dotenv=require('dotenv')
dotenv.config()
const app = express();
const PORT = process.env.PORT||5000;

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", apiRoutes);

  app.use(express.static("../frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
