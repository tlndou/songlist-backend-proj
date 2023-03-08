const { db, DataTypes } = require("../db");

const User = db.define("Users", {
    name: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

const seedUsers = [
];

async function seedUser() {
    for (let user of seedUsers) {
        await User.create(user);
    }
}

module.exports = User;