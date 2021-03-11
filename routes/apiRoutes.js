const router = require("express").Router();
const booksController = require("../controllers/bookController")

router.get("/api/test", test);

// return all saved books
// save new book to db
router.route("/api/books")
    .get(booksController.findAll)
    .post(booksController.create);


//delete book from db
router.route("/api/books/:id")
    .delete(booksController.remove);

//save new book to db
router.get("*", test);

module.exports = router;