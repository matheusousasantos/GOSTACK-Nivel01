import express from 'express';
import helloWord from './routes';

const app = express();

app.listen(3333);

app.get("/", helloWord);