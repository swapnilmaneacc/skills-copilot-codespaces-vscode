// create a web server
// 1. create a new project folder
// 2. initialize the project with npm
// 3. install express
// 4. create a new file named comments.js
// 5. create a new express app
// 6. create a new get route for /comments
// 7. send back some fake comments as JSON
// 8. listen on a port

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
    res.json([
        {username: 'Todd', comment: 'lololol'},
        {username: 'Skyler', comment: 'lmao'},
        {username: 'Sk8erBoi', comment: 'rofl'}
    ]);
});

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});