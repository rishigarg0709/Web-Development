const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs');
const Users = require('./db').user

module.exports = function(passport) {
        passport.use(new LocalStrategy({
            usernameField: 'emailid',
            passwordField: 'password'
    },function (username, password, done) {
        Users.findOne({
            where: {
                emailid:username
            }
        }).then((user) => {
            if (!user) {
                return done(null, false, {message: "No such email-id exists"})
            }
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                  return done(null, user);
                } else {
                  return done(null, false, { message: 'Incorrect Password' });
                }
            })
        }).catch((err) => {
            return done(err)
        })
    }))
  
    passport.serializeUser(function(user, done) {
      done(null, user.id);
    });
  
    passport.deserializeUser(function (id, done) {
        Users.findOne({
            where:{
            id:id
        }
        }).then((user) => {
            if (!user) {
                return done(new Error("No such user"))
            }
            return done(null, user)
        }).catch((err) => {
            done(err)
        })
    })
  };