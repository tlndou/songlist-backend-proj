const { db } = require('../db');
//const { User } = require('./User');
const { Song } = require('./Song');
const {/* userData,*/ songData } = require('../seedData');

const seed = async () => {
    try {
        await db.sync({ force: true }); // recreates the db
        //const createdUsers = await User.bulkCreate(userData);
        const createdSong = await Song.bulkCreate(songData);
    } catch (error) {
        console.error(error);
    }
};

module.exports = { seed };