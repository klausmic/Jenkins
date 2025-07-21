const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello from Vedanth\'s backend!');
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
