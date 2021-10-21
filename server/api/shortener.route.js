import express from 'express';
import shortenerController from './shortener.controller.js';

const router = express.Router();

router.route('/get-links').get(shortenerController.apiGetLinks);
router.route('/get-short').get(shortenerController.apiGetShort);
router.route('/add-link').post(shortenerController.apiPostLink);

export default router;
