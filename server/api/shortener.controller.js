import { isWebUri } from 'valid-url';
import urlsDAO from '../dao/urlsDAO.js';

export default class shortenerController {
  static apiGetLinks = async (req, res, next) => {
    try {
      const linksList = await urlsDAO.getLinks();
      // res.status(200).json({ links: linksList });
      res.status(200).json(linksList);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  static apiGetShort = async (req, res, next) => {
    try {
      const link = await urlsDAO.getLink(req.query.shortUrl);
      // res.status(200).json({ link: link });
      res.status(200).json(link);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  static apiPostLink = async (req, res, next) => {
    try {
      const fullUrl = this.validUrl(req.body.fullUrl);
      const shortUrl = await urlsDAO.addLink(fullUrl);
      res.status(200).json(shortUrl);
      // res.status(200).json({ shortUrl: shortUrl });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  static validUrl = (url) => {
    const validUrl = isWebUri(url) || isWebUri('http://'.concat(url));
    if (validUrl === undefined) {
      throw new Error('invalid url');
    }
    return validUrl;
  };
}
