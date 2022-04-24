const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json()); //req.body

const path = require('path')
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'client/build')))
}

const todoRoutes = require('./routes/todoRoutes')
app.use('/todos', todoRoutes)


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"))
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});