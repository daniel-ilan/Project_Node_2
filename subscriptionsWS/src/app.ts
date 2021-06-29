import cors from 'cors';
import express from 'express';
import connect from './configs/dbConfig';
import { populateMembers, populateMovies } from './utils/populateDB';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

(async () => {
    await connect()
    await populateMembers();
    await populateMovies();
})()

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
