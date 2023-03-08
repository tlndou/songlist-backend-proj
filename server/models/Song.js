const { Sequelize, DataTypes, db } = require('../db');

const Song = db.define('song', {
   // title, artist, album, release_date, duration
    title: {
        type: DataTypes.STRING, 
        required: true
    },
    artist: {
        type: DataTypes.STRING, 
        required: true
    },
    album: {
        type: DataTypes.STRING, 
        required: true
    },
    duration: {
        type: DataTypes.INTEGER, 
        required: true
    }
})

module.exports = { Song };

