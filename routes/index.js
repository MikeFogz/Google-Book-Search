const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./apiRoutes")

router.use("/api", apiRoutes);

router.use((req, res) =>
    res.sendFile(path.join(__dirname, "../client/public/index.html"))
);

module.exports = router;