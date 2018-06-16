
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var labourSchema = new Schema({
  file_name:String,
  last_name:String,
  phone_number:String,
  id_number:String,
  nationality:String,
  follower:[{
      status:{type: String,
      enum : ['WIFE','HUSBAND','CHILD'],
      default: 'CHILD'},
  }]

});

const Labour = mongoose.model('Labour',labourSchema);
module.exports = Labour;