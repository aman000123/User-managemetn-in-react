var express = require('express');
var router = express.Router();

const jwt = require('../security/jwt')

const userDao = require('../database/userdao')

const bcrypt = require('bcrypt');

const UnAuthorize = require('../error/UnAuthorize')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('hello this is me');
// });


router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    const user = await userDao.validateUserLogin(email);

    console.log("user password", user)
    if (user.length > 0) {
        const isPasswordValid = await bcrypt.compare(password, user[0].password);

        console.log("bcrypt password", isPasswordValid);

        if (isPasswordValid) {
            const { id, email, name } = user[0];
            const token = jwt.generateToken({ id, email, permissions: ['product.read', 'product.write'] });
            res.send({ token, name });
        } else {
            next(new UnAuthorize("password is invalid."))
        }

    } else {
        next(new UnAuthorize("User name or password is invalid."))
    }
});

module.exports = router;


// var express = require('express');
// var router = express.Router();

// const jwt = require('../security/jwt')

// const userDao = require('../database/userdao')
// const UnAuthorize = require('../error/UnAuthorize');

// const bcrypt = require('bcrypt');

// /* GET home page. */
// // router.get('/', function(req, res, next) {
// //   res.render('hello this is me');
// // });


// router.post('/login', async (req, res, next) => {

//   const { email, password } = req.body;

//   console.log(req.body);

//   console.log("password bycrypt", password)

//   const user = await userDao.validateUserLogin(email);



//   if (user.length > 0) {

//     const passwordMatch = await bcrypt.compare(password, user[0].password)


//     console.log("password bcrypt", user[0].password);
//     console.log("user password", password);
//     console.log("password Match ", passwordMatch);

//     if (passwordMatch) {
//       const { id, email, name } = user[0];

//       console.log(user[0].password);

//       const token = jwt.generateToken({ id, email });

//       res.send({ token, name })

//     }

//     else {
//       next(new UnAuthorize("User name or password is invalid."))
//     }
//   }

//   else {
//     next(new UnAuthorize("User name or password is invalid."))

//   }

// });
