const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 6000;

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false }))

app.use(bodyParser.json({ extended: true }));

app.post('/api/webhook', ((req, res) => {
  try {
    console.log(req.body.content.invoice)
    res.status(200).json("good")
  } catch (error) {
    console.log(error)
  }
}));

app.listen(PORT, () => {
  console.log('Сервер загружен на порту: ', PORT)
})