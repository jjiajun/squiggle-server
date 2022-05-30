const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const { SALT } = process.env;
const cors = require('cors');

/** Import controllers */
const PredictionController = require('./controllers/predictionCtrl.js');

/** Import routes */
const predictionRoutes = require('./routes/predictionRoutes.js');

/** Instantiate controllers and pass in models. I will include SALT later (for JWT verification) */
const predictionControl = new PredictionController(SALT);

/** Initialize express instance */
const app = express();
app.use(cors({ origin: true }));

const maxRequestBodySize = '2mb';

/** Middlewares */
app.use(express.urlencoded({
  extended: false,
  limit: maxRequestBodySize,
})); // handles req.body from form requests
app.use(express.json({ limit: maxRequestBodySize })); // handles json from axios post requests

/** To access files stored in public folder */
app.use(express.static('public'));

/** Instantiate routes */
app.use('/', predictionRoutes(predictionControl));

/** Set app to listen on the selected PORT */
const PORT = process.env.PORT || 3008;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
