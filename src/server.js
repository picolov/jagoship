import express from 'express';
const app = express();
app.use(express.json());
const port = 10001;

app.get('/', (req, res) => {
  res.json({ message: 'a message from our sponsor' });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})