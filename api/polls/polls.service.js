const pool = require("../../config/database");
//const nodemailer = require("nodemailer");



module.exports = {
 
  getAllPolls: (callBack) => {
    pool.query(
      `select * from u378379063_trip_test_db.polls`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getPollByStatus: (id, callBack) => {
    pool.query(
      `select * from u378379063_trip_test_db.polls where status=?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },


};