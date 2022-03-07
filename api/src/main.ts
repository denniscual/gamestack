import express from 'express';
import cors from 'cors';
import './db';

const app = express();

const corsOptions = {
  origin: '*',
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
