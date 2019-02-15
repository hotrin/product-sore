const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const users = [
    {
        name: 'zohar'
    },
    {
        name: 'oren'
    }
];

// this line MUST be before any routes are defined
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello world!');
});

// send all users to client
app.get('/users', (req, res) => {    
    res.send(users);
});

// add a user to server
app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.send(`user #${users.length} has been added`);
});

app.listen(port, () => {
    console.log(`app is running at port ${port}`);
});