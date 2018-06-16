module.exports = (() => {
    const path = require("path");
    const Models = require(path.resolve(__dirname, '../models/'));
  
    const addProject = (project, callback) => {
      new Models.project(project).then(project => {
        callback(null, project);
      }).catch(err => {
        callback(err, null);
      });
    };

    const getAllProject = (callback) => {
      Models.project.find({}).then(project => {
        callback(project);
      }).catch(err => {
        callback(null);
      });
    }
  
    return {addProject, getAllProject};
  })();