module.exports = (() => {
    const path = require("path");
    const Models = require(path.resolve(__dirname, '../models/'));
  
    const getProject = (searchObj, callback) => {
      if (searchObj._id) {
        Models.project.findOne({_id : searchObj._id}).exec((err, doc) => callback(err, doc));
        return;
      } else {
        Models.project.find(searchObj).exec((err, doc) => callback(err, doc));
        return;
      }
    }
  
    return {getProject};
  })();