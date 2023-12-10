const {
  getAllPolls,
  getPollByStatus,
  } = require("./polls.service");
  const { hashSync, genSaltSync, compareSync } = require("bcryptjs");
  const jwt = require("jsonwebtoken");
  module.exports = {


    getAllPolls: (req, res) => {
     
      getAllPolls((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 1,
              message: "No Poll exists",
            });
          }
          return res.json({
            success: 1,
            data: results,
          });
        });
    },
   
    getPollByStatus: (req, res) => {
      const id = req.params.id;
      // console.log("decoded id",req.decoded.result,req.decoded.result.type,req.decoded.result.id)
      // if (id == req.decoded.result.id || req.decoded.result.type == "admin") {
        getPollByStatus(id, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "No Poll exists",
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
  