const {
  getAllUsers,
  getUserByEmail,
  addUser
  } = require("./users.service");
  const { hashSync, genSaltSync, compareSync } = require("bcryptjs");
  const jwt = require("jsonwebtoken");
  module.exports = {

    login: (req, res) => {
      const body = req.body;
      console.log("bodd", body);
      getUserByEmail(body.email, (err, results) => {
        if (err) {
          return res.status(500).json({
            success: 0,
            error: err,
            message: "Database error while checking the Email",
          });
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Account not exist",
          });
        }
        const result = compareSync(body.password, results.password);
        //let loginStatus=results.login_status
        if (result) {
          let date = new Date();
          // updatelastlogin(date, results.id, (err, result) => {
          //   if (err) {
          //     return res.status(500).json({
          //       success: 0,
          //       error: err,
          //       message: "Database error while updating Jobseekers last Login Time",
          //     });
          //   }
          // });
  
          results.password = undefined;
          const token_payload = {
            id: results.id,
            name: results.name,
            email: body.email,
            role_id:results.role_id
            //type: "JobSeeker",
            //phone: results.phone,
            //login:loginStatus
          };
          res.locals.currentUser = token_payload;
          if (result.savePassword) {
            const jsontoken = jwt.sign(
              { result: token_payload },
              process.env.JWT_KEY,
              {
                expiresIn: "1h",
              }
            );
            res.locals.currentUser = token_payload;
            return res.json({
              success: 1,
              message: "login successfully",
              token: jsontoken,
            });
          } else {
            const jsontoken = jwt.sign(
              { result: token_payload },
              process.env.JWT_KEY,
              {
                expiresIn: "121334456h",
              }
            );
            return res.json({
              success: 1,
              message: "login successfully",
              token: jsontoken,
            });
          }
        } else {
          return res.json({
            success: 0,
            message: "Invalid email or password",
          });
        }
      });
    },

    signUp: (req, res) => {
      const body = req.body;
      let cred={
        email:req.body.email,
        name:req.body.fullname,
        password:req.body.password
      }
     
      getUserByEmail(body.email, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
            error:err
          });
        }
        if (result) {
             console.log("duplicate email")
          return res.status(500).json({
            success: 0,
            message: "Email already exists",
          });
        }
        else {
          const salt = genSaltSync(10);
          body.password = hashSync(body.password, salt);
          addUser(body, (err, results) => {
            if (err) {
              console.log(err);
              return res.status(500).json({
                success: 0,
                message: "Database connection errror adding JobSeeker",
                error:err
              });
            }
           
          
              return res.status(200).json({
                success: 1,
                message:
                  "User Added Successfully.",
                data: results,
                mail: result,
              });
          });
        }
      });
    },
    
    getAllUsers: (req, res) => {
      getAllUsers((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 1,
              message: "No User exists",
            });
          }
          return res.json({
            success: 1,
            data: results,
          });
        });
    },
   
    


  };
  