import mongoose from 'mongoose';

// User Config
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true ,unique: true},
  name: { type: String},
  mobile: { type: String},
  profilepic: { type: String},
  linkedin: { type: String},
  github: { type: String},
  resume: { type: String},
  edutype: { type: String},
  eduschool: { type: String},
  edustart: { type: String},
  eduend: { type: String},
  projectname: { type: String},
  projectdescription: { type: String},
  projecttype: { type: String},
  projectlink: { type: String},
  extype: { type: String},
  excompanyname: { type: String},
  excompanylink: { type: String},
  exrole: { type: String},
  exstart: { type: String},
  exend: { type: String},
  excoverletter: { type: String},
  Coins:{ type: Number},
  otp: {
    type: String,
    required: true
  },
  otpExpiration: {
    type: Date,
    required: true
  }
});

 export const UserModel = mongoose.model('Userainterntest', UserSchema);

// User Actions
 export const getUsers = () => UserModel.find();
 export const getUserById = (id) => UserModel.findById(id);
 export const createUser = (values) => new UserModel(values).save().then((user) => user.toObject());
 export const updateUserById = (id, values) => UserModel.findByIdAndUpdate(id, values);