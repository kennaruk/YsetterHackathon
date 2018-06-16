var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username:    String,
  password:    String,
  role:[{
      status:{ type: String,
      enum : ['PM','SC','TC'],
      default: 'PM'},
  }]
});

const User = mongoose.model('User',userSchema);
module.exports = User;