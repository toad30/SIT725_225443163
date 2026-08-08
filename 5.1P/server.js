const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());

// import route files
const bookRoutes = require('./routes/books');

// mount routes
app.use('/api/books', bookRoutes);

// root route
app.get('/', (req, res) => {
    res.send('Welcome to the book gallery!');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
