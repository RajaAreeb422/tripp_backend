const pool = require("../../config/database");
//const nodemailer = require("nodemailer");



module.exports = {
 
  getAllData: (callBack) => {
    pool.query(
      `select * from u378379063_trip_test_db.dashboard`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getDataById: (id, callBack) => {
    pool.query(
      `select * from u378379063_trip_test_db.dashboard where id=?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },


};