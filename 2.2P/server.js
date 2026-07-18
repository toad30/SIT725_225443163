const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    const operation = "add";

    const sum = a + b;

    res.json({a, b, operation, sum});
});

app.get('/subtract', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    const operation = "subtract";

    const result = a - b;

    res.json({a, b, operation, result});
});

app.get('/multiply', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    const operation = "multiply";

    const product = a * b;

    res.json({a, b, operation, product});
});

app.get('/divide', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    const operation = "divide";

    const result = a / b;

    res.json({a, b, operation, result});
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
