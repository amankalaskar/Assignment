const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const usersRoutes = require('./routes/usersRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
