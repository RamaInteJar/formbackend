const express = require('express');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const facultRoutes = require('./routes/facult.routes');

const app = express();
mongoose.set('strictQuery', true)

app.use(express.json());

const port = 5050;

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};

app.use('/api/facults', facultRoutes);

app.get('/', (req, res) => {
  res.json('Project Initialized successful');
});

app.listen(port, () => {
  dbConnection();
  console.log(`Server is Running on localhost:${port}`);
});
