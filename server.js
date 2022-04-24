const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json()); //req.body

const todoRoutes = require('./routes/todoRoutes')
app.use('/todos', todoRoutes)

const port = 5000
app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});