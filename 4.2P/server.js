var express = require("express");
var app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myProjectDB');

const Frog = require('./models/Frog');
const User = require('./models/User');

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/frogs', async (req, res) => {
    const frogs = await Frog.find({});
    res.json({ statusCode: 200, data: frogs, message: 'Success' });
});

app.post('/api/users', async (req, res) => {
    const { firstName, lastName, email, favouriteFrog } = req.body;

    const user = await User.create({
        first_name: firstName,
        last_name: lastName,
        email: email,
        favourite_frog: favouriteFrog
    });

    res.status(201).json({ statusCode: 201, data: user, message: 'Signed up successfully' });
});

app.get('/api/users', async (req, res) => {
    const users = await User.find({});
    res.json({ statusCode: 200, data: users, message: 'Success' });
})

var port = process.env.port || 3004;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
