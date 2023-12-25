var mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const schema = new mongoose.Schema({
    email:String,
    userName: String,
    password: String,
    role:String
});

schema.pre('save',function(){
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
    //bug sinh ra khi change password
})

module.exports = mongoose.model('user', schema);;

