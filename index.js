const passport = require('passport')
const StravaStrategy = require('passport-strava-oauth2').Strategy

console.log('I think it works')

//user id: 23656
//client secret: 930196a4e5cb3fbf4bac1fdb11003c03fb76ec76
//callbackURL: 


const stravaConfig = {
    clientID: process.env.23656,
    clientSecret: process.env.,
    callbackURL: process.env.STRAVA_CALLBACK
  }