const {
  getAllData,
  getDataById,
  } = require("./dashboard.service");
  const { hashSync, genSaltSync, compareSync } = require("bcryptjs");
  const jwt = require("jsonwebtoken");
  module.exports = {


    getAllData: (req, res) => {
     
      getAllData((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 1,
              message: "No Data exists",
            });
          }
          return res.json({
            success: 1,
            data: results,
          });
        });
    },
   
    getDataById: (req, res) => {
      const id = req.params.id;
    
        getDataById(id, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "No Data exists",
            });
          }
          results.password = undefined;
          return res.json({
            success: 1,
            data: results,
          });
        });
  
    },
    


  };
  