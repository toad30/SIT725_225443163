const bookService = require('../services/books.services');

const getAllBooks = (req, res) => {
    try {
        const books = bookService.getAllBooks();
        res.json({
            status: 200,
            data: books,
            message: 'All books retrieved successfully.'
        });
    } catch (err) {
        res.status(404).json({
            status: 404,
            data: null,
            message: err.message
        });
    }
}

const getBookById = (req, res) => {
    try {
        const book = bookService.getBookById(req.params.id);
        res.json({
            status: 200,
            data: book,
            message: `Book with ID ${req.params.id} retrieved.`
        });
    } catch (err) {
        res.status(404).json({
            status: 404,
            data: null,
            message: err.message
        });
    }
}

module.exports = {
    getAllBooks,
    getBookById
}
