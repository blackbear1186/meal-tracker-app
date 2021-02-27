import express from "express";
import bodyParser from 'body-parser';
import { routes } from './routes';
import { db } from './db';


const app = express();
const port = 8000;

// whenever server receives post request will put on request argument of handler
app.use(bodyParser.json());

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

const start = async () => {
  await db.connect('mongodb://localhost:27017');
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })
}
 start();