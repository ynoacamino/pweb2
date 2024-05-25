const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.static('public'));

app.get('/data', (req, res) => {
  res.sendFile(__dirname + '/data.json');
});

app.listen(8000, () => {
  console.log('Server running on port 8000');
} );
