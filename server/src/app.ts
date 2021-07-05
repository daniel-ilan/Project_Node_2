import cors from 'cors';
import express from 'express';
import connect from './configs/dbConfig';
import todoRoutes from './routes/todos';
import authRoutes from './routes/auth';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(authRoutes);
app.use(todoRoutes);

const port = process.env.PORT || 8082;
connect()
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });
