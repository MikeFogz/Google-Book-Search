const router = require("express").Router();
const { test } = require("../controllers/bookController")

router.get("/api/test", test);

// return all saved books
router.get("/api/books", );

//save new book to db
router.post("/api/books", test);

//delete book from db
router.delete("/api/books/:id", test);

//save new book to db
router.get("*", test);

module.exports = router;