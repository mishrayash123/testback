import mongoose from 'mongoose';

// User Config
const UserSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  userid: { type: String, required: true },
});

 export const UserModel = mongoose.model('products', UserSchema);

// User Actions
 export const getproducts = () => UserModel.find();
 export const getproductsById = (id) => UserModel.findById(id);
 export const getproductsByuserid = (userid) => UserModel.findOne({ 'userid': userid });
 export const createproducts = (values) => new UserModel(values).save().then((user) => user.toObject());
 export const deleteproductsById = (id) => UserModel.findOneAndDelete({ _id: id });
