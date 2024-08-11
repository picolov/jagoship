import express from 'express';
const app = express();
app.use(express.json());
const port = 10001;

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})