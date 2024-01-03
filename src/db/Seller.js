import mongoose from 'mongoose';

// User Config
const UserSchema = new mongoose.Schema({
  gstno: { type: String, required: true },
  userid: { type: String, required: true },
  bank: { type: String, required: true },
  ifc: { type: String, required: true },
  address: { type: String, required: true },
});

 export const UserModel = mongoose.model('sellers', UserSchema);

// User Actions
 export const getseller = () => UserModel.find();
 export const getsellerById = (id) => UserModel.findById(id);
 export const getsellerByuserid = (userid) => UserModel.findOne({ 'userid': userid });
 export const createseller = (values) => new UserModel(values).save().then((user) => user.toObject());
 export const deletesellerById = (id) => UserModel.findOneAndDelete({ _id: id });
