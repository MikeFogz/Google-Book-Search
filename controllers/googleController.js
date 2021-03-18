const axios = required("axios");
const db = require("../models")

module.exports = { 
    findAll: function(req, res) {
        const { query: params } = req;
        axios
            .get("https://www.googleapis.com/books/v1/volumes", {
                params
            })
            .then(results =>
                results.data.items.filter(
                    results.volumeInfo.title &&
                    results.volumeInfo.infoLink &&
                    results.volumeInfo.authors &&
                    results.volumeInfo.description &&
                    results.volumeInfo.imageLinks &&
                    results.volumeInfo.imageLinks.thumbnail
                )
            )
            .then(apiBooks =>
                db.Books.find().then(dbBooks => 
                    apiBooks.filter(apiBooks =>
                        dbBooks.every(dbBooks => dbBooks.googleId.toString() !== apiBooks.id)
                        )
                    )
            )
            .then(books => res.json(books))
            .catch(err => res.status(422).json(err));
    }
};