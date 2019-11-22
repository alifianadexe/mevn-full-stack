const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const conn = require('../models/connection');
var db = conn.connect();

var Post = require('../models/post');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Get All Post
app.get('/posts', (get, res) => {
    Post.find({}, 'title description', function(error, posts){
        if (error) console.log(error);
        res.send({
            posts : posts
        });
    }).sort({_id:-1});
});

// Add new Post
app.post('/posts', (req, res) => {
    var db = req.db;
    var title = req.body.title;
    var description = req.body.description;
    var new_post = new Post({
        title:title,
        description:description
    })

    new_post.save(function(error){
        if (error){
            console.log(error)
        }
        res.send({
            success: true,
            message: 'Post Succesfully'
        });
    });
});

// Retrieve Post Data
app.put('/posts/:id', (req, res) => {
    var db = req.db;
    Post.find(req.params.id, 'title description', function(error, post){
        if (error) console.log(error);

        post.title = req.body.title;
        post.description = req.body.description;
        post.save(function (error){
            if (error){ console.log(error) }
            res.send({
                success:true
            });
        })
    });
});

// Delete Post Data
app.delete('/posts/:id', (req, res) =>{
    var db = req.db;
    Post.remove({ _id : req.params.id }, function(error, post){
        if (error) res.send(error);
        res.send({
            success: true
        });
    })
});

// Get Post Data
app.get('/post/:id', (req, res) => {
    var db = req.db;
    Post.findById(req.params.id, 'title description', function(error, res){
        if (error) { console.error(error); }
        res.send(post);
    });
});

app.listen(process.env.PORT || 8081);
