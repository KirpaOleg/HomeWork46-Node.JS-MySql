const express = require('express');
const router = express.Router();
const {getAllUsers} = require('../model/users');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await getAllUsers();
  console.log('users >>>', users)
  res.render('users', users);
});

router.post('/', upload.none(), async(req, res) => {

  res.send(`hello`);
});

module.exports = router;

