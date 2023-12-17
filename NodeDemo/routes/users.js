var express = require('express');
const { model } = require('mongoose');
const { use } = require('.');
var router = express.Router();
var responseData = require('../helper/responseData');
var modelUser = require('../schema/test')



//domain:port/users
/* GET users listing. */
router.get('/', async function (req, res, next) {
  var usersAll = await modelUser.find({}).exec();
  responseData.responseReturn(res, 200, true, usersAll);
});
router.get('/:id', function (req, res, next) {// get by ID
  var user = users.find(user => user.id == req.params.id);
  if (user) {
    responseData.responseReturn(res, 200, true, user);
  } else {
    responseData.responseReturn(res, 404, false, "khong tim thay user");
  }
});
router.post('/add', function (req, res, next) {
  var user = users.find(user => user.id == req.body.id);
  if(user){
    responseData.responseReturn(res, 404, false, "user da ton tai");
  }else{
    const newUser = {
      id: req.body.id,
      name: req.body.name
    }
    users.push(newUser);
    responseData.responseReturn(res, 200, true, newUser);
  }
});
router.put('/edit/:id', function (req, res, next) {
  var user = users.find(user => user.id == req.params.id);
  if (user) {
    user.name = req.body.name;
    responseData.responseReturn(res, 200, true, user);
  } else {
    responseData.responseReturn(res, 404, false, "khong tim thay user");
  }
});
router.delete('/delete/:id', function (req, res, next) {//delete by Id
  var ids = users.map(user=>user.id);
  var index = ids.indexOf(parseInt(req.params.id));//===
  console.log(index);
  //var index  = users.indexOf(user);
  if (index>-1) {
    users.splice(index,1);
    responseData.responseReturn(res, 200, true, users);
  } else {
    responseData.responseReturn(res, 404, false, "khong tim thay user");
  }
});
function genKey(length){
  let result = "";
  let source = "abcdefghijklmnopqrstxyzw0123456789"
  for (let index = 0; index < length; index++) {
    result+=source[Math.floor(Math.random()*source.length)];
  }
  return result;
}

module.exports = router;
