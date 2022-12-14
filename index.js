require("dotenv").config();
const expess = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const app = expess();

app.use(expess.json({ extended: true }));
app.use("/uploads", expess.static(path.join(__dirname, "./uploads/")));
app.use(cors());
app.use(morgan("dev"));
app.use(require("./routes/index"));

const { MDB_SERVER, PORT } = process.env;

mongoose.set("strictQuery", false);

mongoose.connect(MDB_SERVER, (error) => {
  if (error)
    return console.log("Ошибка при соединение с сервером mongoDB: " + error);
  return console.log("Соединение с сервером mongoDB прошло успешно");
});

app.listen(PORT, (erorr) => {
  if (erorr) return console.log("Ошибка при соединение с сервером");
  return console.log(`Соединение с сервером прошло успешно на порте ${PORT}`);
});
