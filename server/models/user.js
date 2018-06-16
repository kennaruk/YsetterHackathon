var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username:    String,
  password:    String,
  th_first_name: String,
  en_first_name: String,
  th_last_name: String,
  en_last_name: String,
  role:{
      type: String,
      enum : ['PM','SC','TC'],
      default: 'PM'
  }
});

const User = mongoose.model('User',userSchema);
module.exports = User;