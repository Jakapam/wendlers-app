const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/wendlers");
const db = mongoose.connection;

exports.mongoose = mongoose;
exports.db = db;
