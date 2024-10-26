const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db")
const router = require("./routes")
// const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
//neccessary middleware
app.use(express.json())
app.use(cookieParser())
const FRONTEND_URL = process.env.NODE_ENV === "production"
    ? "https://ajit-e-com-frontend.vercel.app"  
    : process.env.FRONTEND_URL;                

app.use(cors({
    origin: [FRONTEND_URL],
    credentials: true
}));

// app.use("/", (req, res) => {
//   res.status(200).json({message: "server is running"})
// })

app.use("/api", router)
const PORT = 8080 || process.env.PORT;

connectDB().then(()=>{
    app.listen(PORT, () => {
        console.log("connected to DB")
        console.log("Server is running");
      });
})

