const express = require('express');
const mysqlDb = require('../mysqlDb');
const router = express.Router();

router.get('/', async (req, res) => {
  const news_id = req.query.news_id;

  let messages;
  try {
    if (news_id) {
      [messages] = await mysqlDb.getConnection().query(
        'select id, author, message from messages where new_id =' + news_id
        );
    } else {
      [messages] = await mysqlDb.getConnection().query('select id, author, message from messages');
    }
  } catch (e) {
    console.log(e.message);
  }
  console.log(messages);
  res.send(messages);
});

router.post('/', async (req, res) => {
  if (!req.body.message || !req.query.news_id) {
    return res.status(400).send({error: 'Data not valid'});
  }

  const messages = {
    news_id: req.query.news_id,
    author: req.body.author,
    message: req.body.message
  };

  if (req.file) {
    messages.image = req.file.filename;
  }

  let newNews;
  try {
    newNews = await mysqlDb.getConnection().query(
      'insert into ?? (new_id, author, message) values (?, ?, ?)',
      ['messages', messages.news_id, messages.author, messages.message]
    );
  } catch (e) {
    console.log(e.message);
  }

  res.send({
    ...messages,
    id: newNews[0].insertId
  });
});

router.delete('/:id', async (req, res) => {
  let response;
  try {
    response = await mysqlDb.getConnection().query(
      'delete from ?? where id = ?',
      ['messages', req.params.id]
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