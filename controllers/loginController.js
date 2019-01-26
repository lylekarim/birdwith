const db = require("../models");

// Defining methods for the loginController
module.exports = {

//************************************************************/
//* Allow Birders to self register
//************************************************************/
  signUp: (req, res) => {
//    console.log("body = " + JSON.stringify(req.body));
    const { body } = req;
    const {
      firstName,
      lastName,
      password
    } = body;
    let { email } = body;


    if (!firstName) {
      return res.send({
        success: false,
        message: 'ERROR: You must specify a first name.'
      });
    };
    if (!lastName) {
      return res.send({
        success: false,
        message: 'ERROR: You must specify a last name.'
      });
    };
    if (!email) {
      return res.send({
        success: false,
        message: 'ERROR: You must specify an email address.'
      });
    };
    if (!password) {
      return res.send({
        success: false,
        message: 'ERROR: You must specify a password.'
      });
    };
    email = email.toLowerCase();


    // checkExist: (req, res) => {
    db.Birder.find({
      email: email
    }, (err, exists) => {
      if (err) {
        return res.send({
          success: false,
          message: 'ERROR:  Server error'
        });
      } else if (exists.length > 0) {
        return res.send({
          success: false,
          message: 'ERROR:  Account requested does not meet requriements'
        });
      };
    });


    const newBirder = new Birder();
    newBirder.email = email;
    newBirder.firstName = firstName;
    newBirder.lastName = lastName;
    newBirder.password = newBirder.generateHash(password);
    newBirder.save((err, Birder) => {
      if (err) {
        return res.send({
          success: false,
          message: 'ERROR:  Server error'
        });
      }
      return res.send({
        success: true,
        message: 'Signup complete!'
      });

    }
      // }
    )
  },



//************************************************************/
//* Process Birder Sign-in and create auth token for them
//************************************************************/
  signIn: (req, res) => {
    const { body } = req;
    const { password } = body;
    let { email } = body;

    console.log("email = " + email + "  password = " + password);

    if (!email) {
      return res.send({
        success: false,
        message: 'ERROR: You must specify an email address.'
      });
    };
    if (!password) {
      return res.send({
        success: false,
        message: 'ERROR: You must specify a password.'
      });
    };
    email = email.toLowerCase();


    Birder.find({
      email: email
    }, (err, birders) => {
//      console.log("Found Birder = " + Birders);
      if (err) {
        return res.send({
          success: false,
          message: 'ERROR:  Server error'
        });
      };
      if (birders.length != 1) {
        return res.send({
          success: false,
          message: 'ERROR:  Unable to process login.'
        });
      };


      const birder = birders[0];
//      console.log("password supplied = " + password);
      if (!birder.validPassword(password, birder.password)) {
        return res.send({
          success: false,
          message: 'ERROR:  Invalid login.'
        });
      };


      const birderSession = new birderSession();
      birderSession.birderId = birder._id;
      birderSession.save((err, doc) => {
        if (err) {
          return res.send({
            success: false,
            message: 'ERROR:  Server error'
          });
        };


        return res.send({
          success: true,
          message: "Birder login is complete",
          token: doc._id
        });
      });
    });
  },



//************************************************************/
//* Verify validity of a Birder's token if presented 
//************************************************************/
  verify: (req, res) => {
    const { body } = req;
    const { token } = body;
    console.log(req);
    console.log("Token = " + token);

    BirderSession.find({
      _id: token,
      isDeleted: false
    }, (err, sessions) => {
      if (err) {
        console.log("fail 1");
        return res.send({
          success: false,
          message: "ERROR:  Unable to obtain Birder token."
        });
      };


      if (sessions.length != 1) {
       console.log("Session length = " + sessions.length);
        return res.send({
          success: false,
          message: "ERROR:  Unable to verify session."
        });
      } else {
         console.log("success 3");
        return res.send({
          success: true,
          message: "Successfully verified session token."
        });
      };
    });
  },



//************************************************************/
//* Process logout and invalidate Birder token in DB 
//************************************************************/
  logout: (req, res) => {
    const { query } = req;
    const { token } = query;

    BirderSession.findOneAndUpdate({
      _id: token,
      isDeleted: false
    }, {
      $set:{isDeleted:true}
    }, null, (err, sessions) => {
      if (err) {
        return res.send({
          success: false,
          message: "ERROR:  Unable to obtain Birder token."
        });
      };

        return res.send({
          success: true,
          message: "Successfully logged out."
        });
      // };
    });
  },
};
