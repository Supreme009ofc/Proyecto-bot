const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/webhook', twilio.webhook(), (req, res) => {
  const twiml = new twilio.twiml.MessagingResponse();

  // Lógica del bot aquí

  res.type('text/xml');
  res.send(twiml.toString());
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
