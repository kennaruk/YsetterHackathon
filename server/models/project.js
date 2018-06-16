
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  code:    String,
  th_name: String,
  en_name: String,
  province:  String,
  start_date:  {
    type: Date,
    default: Date.now
  },
  end_date:  {
    type: Date,
    default: Date.now
  },
  contact: Object,
  camp:   Object
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;