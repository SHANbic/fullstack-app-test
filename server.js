const express = require('express');
const app = express();
const PORT = 5000;
const hardware = require('./datas/deviceStock');

app.get('/:hardware', (req, res) => {
  const found = hardware.find(item => item.type === req.params.hardware);
  res.send(found);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
