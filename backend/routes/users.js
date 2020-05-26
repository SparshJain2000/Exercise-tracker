const router = require("express").Router();
let User = require("../models/user");
router.get("/", (req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("error: " + err));
});
router.post("/add", (req, res) => {
    const username = req.body.username,
        newUser = new User({ username });
    newUser
        .save()
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("error: " + err));
});
module.exports = router;
