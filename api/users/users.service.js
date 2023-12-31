const pool = require("../../config/database");
//const nodemailer = require("nodemailer");



module.exports = {
 
  addUser: (data, callBack) => {
    pool.query(
      `insert into u378379063_trip_test_db.user set email=?,role_id=?,first_name=?,last_name=?,username=?,date_of_birth=?,gender=?,country=?,state=?,district=?,village=?,community=?, password=?`,
      [ 
        data.email,
        data.role_id,
        data.first_name,
        data.last_name,
        data.user_name,
        data.date_of_birth,
        data.gender,
        data.country,
        data.state,
        data.district,
        data.village,
        data.community,
        data.password
      ],
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