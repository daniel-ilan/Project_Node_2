import cors from 'cors';
import express from 'express';
import connect from './configs/dbConfig';
import todoRoutes from "./routes/todos";
import initRoute from './routes/init';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(initRoute)
app.use(todoRoutes);

const port = process.env.PORT || 8082;
connect().then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
}).catch(err => {
    console.log(err);
});
