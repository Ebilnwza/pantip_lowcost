const mongoose = require('mongoose');
mongoose.set('strictQuery',true)
const useSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});
const Usersmodel = mongoose.model('users', useSchema); //สร้าง collectrionชื่อ users
module.exports = Usersmodel;