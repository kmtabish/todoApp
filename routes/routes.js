
const createTask = require('./../controller/create');
const addUser = require('./../controller/addUser');
const getTask = require('./../controller/getData');
const getUser = require('./../controller/getUser');

module.exports = function(app) {
  app.post('/create',createTask.post);
  app.post('/adduser',addUser.post);  
  app.get('/get',getTask.get);  
  app.get('/getuser',getUser.get); 


   //Default route   
   app.get('*', function(req, res) {
      res.sendFile({});
    });
    		
}