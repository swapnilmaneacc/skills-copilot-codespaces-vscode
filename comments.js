//creat a web server
const express = require('express');
const app = express();
//install body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//create an array to store comments
let comments = [];
//set up a route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});
//set up a route to post a new comment
app.post('/comments', (req, res) => {
  let comment = req.body;
  comments.push(comment);
  res.json(comment);
});
//set up a route to get a comment by id
app.get('/comments/:id', (req, res) => {
  let id = req.params.id;
  let comment = comments[id];
  res.json(comment);
});
//set up a route to delete a comment by id
app.delete('/comments/:id', (req, res) => {
  let id = req.params.id;
  comments.splice(id, 1);
  res.json(comments);
});
//set up a route to update a comment by id
app.put('/comments/:id', (req, res) => {
  let id = req.params.id;
  let newComment = req.body;
  comments[id] = newComment;
  res.json(newComment);
});
//start the server
app.listen(3000, () => {
  console.log('Server is running');
});