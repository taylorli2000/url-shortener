import { MongoClient } from 'mongodb';
import app from './index.js';
import urlsDAO from './dao/urlsDAO.js';

const port = process.env.PORT || 8000;

MongoClient.connect(process.env.URLSHORTENER_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .then(async (client) => {
    await urlsDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  });
