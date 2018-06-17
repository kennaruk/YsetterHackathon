module.exports = (() => {
    const path = require("path");
    const Models = require(path.resolve(__dirname, '../models/'));
  
    const getLabour = (searchObj, callback) => {
      if (searchObj._id) {
        Models.labour.findOne({_id : searchObj._id}).exec((err, doc) => callback(err, doc));
        return;
      } else {
        Models.labour.find(searchObj).exec((err, doc) => callback(err, doc));
        return;
      }
    }

    const getLabourByIdNo = (idNo, callback) => {
        // Models.labour.find()
    };

    const getChildren = (callback) => {
        Models.labour.find({follower:{$elemMatch:{status:"CHILD"}}}).exec((err,doc) => {
            callback(err,doc)
        });
    }

    const getOnlyChildren = (callback) => {
        Models.labour.aggregate({follower:{$elemMatch:{status:"CHILD"}}}).exec((err,doc) => {
            callback(err,doc)
        });
    }

    const createLabour = (createObj, callback) => {
        new Models.labour(createObj).save().then(labour=>{
            callback(null,labour);
        }).catch(err => {
            callback(err,null);
        });
      }
  
    return {getLabour,createLabour,getChildren,getOnlyChildren};
  })();