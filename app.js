const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const catController = require('./src/controller/catController');
const authenticateRequest = require('./src/middleware/authMiddleware');
const PORT = process.env.PORT || 3000;

const app = express();

// Enable CORS for a specific origin
const corsOptions = {
    origin: 'https://image-management-dashboard.com', //example FE url
    optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send({
        name: "image-uploader-svc",
        version: "1.0.0"
    })
});

// Use the authentication middleware
app.use(authenticateRequest);

app.use('/cats', catController);

app.listen(PORT, () => {
    console.log(`*`.repeat(30));
    console.log(`Server is running on port http://localhost:${PORT}`);
    console.log(`*`.repeat(30));
});
