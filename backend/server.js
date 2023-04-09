const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
 const morgan = require('morgan');
const connectDB = require('./config/db');


const cors = require('cors');


dotenv.config({ path: './config/config.env' });

connectDB();

const transactions = require('./routes/transactions');

const app = express();

app.use(express.json());
const corsOptions ={
  //origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.get("/",(req,res)=>{
  res.send("Expense tracker api");
})

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${PORT}`.yellow.bold));
