import express from "express";
import bodyParser from 'body-parser';
import { routes } from './routes';

const app = express();
const port = 8000;

// whenever server receives post request will put on request argument of handler
app.use(bodyParser.json());

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
