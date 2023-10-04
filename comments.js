// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

// Create express app
const app = express();

// Use body parser to parse request body
app.use(bodyParser.json());

// Use cors to allow cross-origin requests
app.use(cors());

// Create comments object
const commentsByPostId = {};

// Get