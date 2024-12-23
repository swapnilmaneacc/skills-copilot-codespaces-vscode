// create web server
// create a route for comments
// create a route for comments/:id
// create a route for comments/:id/delete
// create a route for comments/:id/edit
// create a route for comments/:id/update

const express = require('express');
const router = express.Router();
const fs = require('fs');

// get comments from comments.json
const comments = JSON.parse(fs.readFileSync('comments.json'));

router.get('/', (req, res) => {
    res.json(comments);
});

router.get('/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('The comment with the given ID was not found.');
    res.json(comment);
});

router.post('/', (req, res) => {
    const comment = {
        id: comments.length + 1,
        name: req.body.name,
        email: req.body.email,
        body: req.body.body
    };
    comments.push(comment);
    fs.writeFileSync('comments.json', JSON.stringify(comments));
    res.json(comment);
});

router.delete('/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('The comment with the given ID was not found.');
    const index = comments.indexOf(comment);
    comments.splice(index, 1);
    fs.writeFileSync('comments.json', JSON.stringify(comments));
    res.json(comment);
});

router.put('/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('The comment with the given ID was not found.');
    comment.name = req.body.name;
    comment.email = req.body.email;
    comment.body = req.body.body;
    fs.writeFileSync('comments.json', JSON.stringify(comments));
    res.json(comment);
});

module.exports = router;