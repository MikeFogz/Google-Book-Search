const router = require("express").Router();

router.get("/api/test", (req, res) => {
    res.send({ msg: "success"});
});

module.exports = router;