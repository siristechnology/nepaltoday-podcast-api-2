require('dotenv').config()
const NOTIFICATION_START_TIME = 858
const NOTIFICATION_END_TIME = 900
const FIREBASE_NOTIFICATION_URL = 'https://fcm.googleapis.com/fcm/send'

const FIREBASE_SERVER_KEY = process.env.FIREBASE_SERVER_KEY

module.exports = { FIREBASE_SERVER_KEY, NOTIFICATION_END_TIME, NOTIFICATION_START_TIME, FIREBASE_NOTIFICATION_URL }
