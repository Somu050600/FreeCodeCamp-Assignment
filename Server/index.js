require('dotenv').config()
const express = require('express')
const path = require("path");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const { checkAuth } = require("./middlewares/auth");

const loginRouter = require('./routers/staticRouter')
const userRoute = require("./routers/user");

const app = express()
const port = process.env.PORT || 5001

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

// This is where our API is making its connection to the database
mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
})

app.use(cors(corsOptions))
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());

// ROUTERS
app.use('/user', userRoute)
app.use('/', checkAuth, loginRouter)


// START SERVER
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

module.exports = app
