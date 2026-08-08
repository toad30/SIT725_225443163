const bookItems = [
    { 
        id: "b1", 
        title: "The Three-Body Problem", 
        author: "Liu Cixin", 
        year: 2008, 
        genre: "Science Fiction", 
        summary: `The Three-Body Problem is the first novel in the Remembrance of Earth's Past trilogy. 
            The series portrays a fictional past, present, and future wherein Earth encounters an alien 
            civilization from a nearby system of three Sun-like stars orbiting one another, 
            a representative example of the three-body problem in orbital mechanics.` 
    },
    { 
        id: "b2", 
        title: "Jane Eyre", 
        author: "Charlotte Bronte", 
        year: 1847, 
        genre: "Classic", 
        summary: `An orphaned governess confronts class, morality, and love at Thornfield 
            Hall, uncovering Mr. Rochester's secret and forging her own independence.` 
    },
    { 
        id: "b3", 
        title: "Pride and Prejudice", 
        author: "Jane Austen", 
        year: 1813, 
        genre: "Classic", 
        summary: `Elizabeth Bennet and Mr. Darcy navigate pride, misjudgement, and social 
            expectations in a sharp study of manners and marriage.` 
    },
    { 
        id: "b4", 
        title: "The English Patient", 
        author: "Michael Ondaatje", 
        year: 1992, 
        genre: "Historical Fiction", 
        summary: `In a ruined Italian villa at the end of WWII, four strangers with 
            intersecting pasts confront memory, identity, and loss.` 
    },
    { 
        id: "b5", 
        title: "Small Gods", 
        author: "Terry Pratchett", 
        year: 1992, 
        genre: "Fantasy", 
        summary: `In Omnia, the god Om returns as a tortoise, and novice Brutha must 
            confront dogma, empire, and the nature of belief.` 
    }
];

function getAllBooks() {
    if (!bookItems) {
        throw new Error(`Books were unable to be retrieved.`);
    }

    return bookItems;
}

function getBookById(id) {
    if (!id) {
        throw new TypeError('No ID was provided.');
    }

    const book = bookItems.find((book) => book.id == id);

    if (!book) {
        throw new Error(`Book with ID ${id} was not found.`);
    }

    return book;
}

module.exports = {
    getAllBooks,
    getBookById    
}
