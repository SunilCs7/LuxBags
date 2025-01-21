const express = require("express");
const app = express();

const dbConnection = require("./config/mongoose-connection");

// dbConnection();

// Routes
const ownerRouter = require("./routes/owerRouter");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");

const cookieParser = require("cookie-parser");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("hey");
});

app.use("/owners",ownerRouter);
app.use("/products",productRouter);
app.use("/users",userRouter);

// app.listen(3000);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
