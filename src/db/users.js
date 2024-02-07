import mongoose from 'mongoose';

// User Config
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true, select: false },
  salt: { type: String, select: false },
  sessionToken: { type: String, select: false },
});

 export const UserModel = mongoose.model('Userassignment', UserSchema);

// User Actions
 export const getUsers = () => UserModel.find();
 export const getUserByEmail = (email) => UserModel.findOne({ email });
 export const getUserBySessionToken = (sessionToken) => UserModel.findOne({sessionToken: sessionToken });
 export const getUserById = (id) => UserModel.findById(id);
 export const createUser = (values) => new UserModel(values).save().then((user) => user.toObject());
 export const deleteUserById = (id) => UserModel.findOneAndDelete({ _id: id });
 export const updateUserById = (id, values) => UserModel.findByIdAndUpdate(id, values);


