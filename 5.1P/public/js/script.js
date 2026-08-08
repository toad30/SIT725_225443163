const tbody = document.getElementById('books-body');

async function loadBooks() {
    try {
        const response = await fetch('/api/books');

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const result = await response.json();
        renderBooks(result.data);
    } catch (err) {
        console.log(`Failed to load books: ${err.message}`);
    }
}

function renderBooks(books) {
    tbody.innerHTML = ``;

    books.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td>${book.genre}</td>
            <td>${book.summary}</td>
        `;
        tbody.appendChild(row);
    });
}

loadBooks();
