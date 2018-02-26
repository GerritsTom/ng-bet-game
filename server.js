const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);
