import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

// configurations
dotenv.config();
import './config/database';
import './config/redis';

// routes
import ApiRoute from './routes/';

// Boot express
const app: Application = express();
const port = process.env.PORT || 4000;
const base : string = '/api/v1';

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(`${base}/`,ApiRoute);

// Application routing
app.get('/', (req: Request, res: Response) => {
  res.status(200).send({ data: 'Test for coding'});
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));

// Handle unhandled promise rejections and exceptions
process.on("unhandledRejection", (err: any) => {
  console.log(err);
})

process.on("uncaughtException", (err: any ) => {
  console.log(err);
});