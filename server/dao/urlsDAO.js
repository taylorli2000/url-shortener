import { nanoid } from 'nanoid';

let urls;

export default class urlsDAO {
  static injectDB = async (conn) => {
    if (urls) {
      return;
    }
    try {
      urls = await conn.db(process.env.URLSHORTENER_DB_NS).collection('urls');
    } catch (err) {
      console.error(`Unable to establish collection handles in urlsDAO: ${e}`);
    }
  };
  static getLinks = async () => {
    try {
      const linkDocs = await urls.find({}).toArray();
      return linkDocs;
    } catch (err) {
      console.error(`Unable to retrieve all links: ${err}`);
      throw new Error('Unable to retrieve all links');
    }
  };
  static getLink = async (shortUrl) => {
    try {
      const linkDoc = await urls.findOne({ shortUrl: shortUrl });
      return linkDoc;
    } catch (err) {
      console.error(`Unable to retrieve link: ${err}`);
      throw new Error('Unable to retrieve link');
    }
  };
  static addLink = async (fullUrl) => {
    try {
      const shortUrl = await nanoid(10);
      const linkDoc = { fullUrl: fullUrl, shortUrl: shortUrl };
      await urls.insertOne(linkDoc);
      return {
        fullUrl: fullUrl,
        shortUrl: shortUrl,
      };
    } catch (err) {
      console.error(`Unable to post link: ${err}`);
      throw new Error('Unable to post link');
    }
  };
}
