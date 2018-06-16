
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  name:String,
  degree:Number,
  color:String,
  brand:String,
  country:String,
  price:{
    type:Number,
    default: 0
  },
  type:String,
  rate:{
    type:Number,
    default: 0
  },
  img:String,
  date:{
    type:Date,
    default: Date.now
  }

});

const Project = mongoose.model('Project',projectSchema);
module.exports = Project;