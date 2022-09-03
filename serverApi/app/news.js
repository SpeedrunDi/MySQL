const express = require('express');
const mysqlDb = require('../mysqlDb');
const moment = require("moment");
const multer = require("multer");
const config = require("../config");
const {nanoid} = require("nanoid");
const path = require("path");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath)
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({storage});

router.get('/', async (req, res) => {
  let news;
  try {
    [news] = await mysqlDb.getConnection().query('select id, title, image, datetime from news');
  } catch (e) {
    console.log(e.message);
  }
  res.send(news);
});

router.get('/:id', async (req, res) => {
  let news;
  try {
    [news] = await mysqlDb.getConnection().query(
      `select * from ?? where id = ?`,
      ['news', req.params.id]
    );
  } catch (e) {
    console.log(e.message);
  }
  res.send(news[0]);
});

router.post('/', upload.single("image"), async (req, res) => {
  if (!req.body.title || !req.body.description) {
    return res.status(400).send({error: 'Data not valid'});
  }

  const date = new Date().toISOString();
  let current_date = moment(date).format("YYYY-MM-DD hh:mm:ss");

  const news = {
    title: req.body.title,
    description: req.body.description,
    datetime: current_date
  };

  if (req.file) {
    news.image = req.file.filename;
  }

  let newNews;
  try {
    newNews = await mysqlDb.getConnection().query(
      'insert into ?? (title, description, image, datetime) values (?, ?, ?, ?)',
      ['news', news.title, news.description, news.image, news.datetime]
    );
  } catch (e) {
    console.log(e.message);
  }

  res.send({
    ...news,
    id: newNews[0].insertId
  });
});

router.delete('/:id', async (req, res) => {
  let response;
  try {
    response = await mysqlDb.getConnection().query(
      'delete from ?? where id = ?',
      ['news', req.params.id]
    );
  } catch (e) {
    console.log(e.message);
  }

  if (response) {
    res.send('Deletion completed!');
  } else {
    res.send('Deletion is not possible');
  }
});

module.exports = router;