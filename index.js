const { urlencoded } = require('express');
const express = require('express');
const moment = require('moment');
const { parse } = require('path');
const path = require('path');
const app = express();
const logger = require('./middleware/logger');


//Init middleware
app.use(logger);

// Body Parser 
app.use(express.json());
app.use(express(urlencoded({extended: false})))


// Set a static folder

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));