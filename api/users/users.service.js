const pool = require("../../config/database");
//const nodemailer = require("nodemailer");



module.exports = {
 
  addUser: (data, callBack) => {
    pool.query(
      `insert into u378379063_trip_test_db.user set  email=?,name=?, password=?`,
      [data.email,data.name, data.password],
      (error, results, fields) => {
        if (error) {
          return callBack(error, null);
        }
        return callBack(null, results);
      }
    );
  },

  getAllUsers: (callBack) => {
    pool.query(
      `select * from u378379063_trip_test_db.user where role_id=${2}`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getUserByEmail: (email, callBack) => {
    pool.query(
      `select * from u378379063_trip_test_db.user where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          return callBack(error, null);
        }
        return callBack(null, results[0]);
      }
    );
  },


};