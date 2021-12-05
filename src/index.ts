require('dotenv').config();

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

interface RequestBody {
  name: string;
}

app.post('/', (request, response) => {
  const user = request.body as RequestBody;

  return response.send({
    message: `Hello ${user.name}`,
  });
});

app.listen(PORT, () => console.log(`Listening ${PORT}`));
