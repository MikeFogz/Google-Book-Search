const router = require("express").Router();
const { test } = require("../controllers/BookController")

router.get("/api/test", test);


module.exports = router;