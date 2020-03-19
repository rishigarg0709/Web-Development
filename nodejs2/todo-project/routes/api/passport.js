const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Users = require('./db').user

passport.serializeUser(function (user, done) {
    done(null, user)
})

passport.deserializeUser(function (email, done) {
    Users.findOne({
        emailid: email
    }).then((user) => {
        if (!user) {
            return done(new Error("No such email-id exists"))
        }
        return done(null, user)
    }).catch((err) => {
        done(err)
    })
})

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
            return done(null, false, {message: "No such email-id"})
        }
        if (user.password !== password) {
            return done(null, false, {message: "Wrong password"})
        }
        return done(null, user)
    }).catch((err) => {
        return done(err)
    })
}))

exports = module.exports = passport