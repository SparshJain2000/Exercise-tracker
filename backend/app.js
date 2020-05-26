const express = require("express"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    exercisesRouter = require("./routes/exercises"),
    usersRouter = require("./routes/users"),
    app = express(),
    port = 8080 || process.env.PORT;
require("dotenv").config();
mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
    console.log("connected to atlas");
});

app.use(cors());
app.use(bodyParser.json());

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);
app.listen(port, () => {
    console.log(`listening ${port}`);
});
