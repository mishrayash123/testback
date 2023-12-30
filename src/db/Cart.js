import mongoose from 'mongoose';

// User Config
const UserSchema = new mongoose.Schema({
  productid: { type: Number, required: true },
  userid: { type: String, required: true },
});

 export const UserModel = mongoose.model('Cart', UserSchema);

// User Actions
 export const getcart = () => UserModel.find();
 export const getCartById = (id) => UserModel.findById(id);
 export const getbyproductid = (productid) => UserModel.findOne({ 'productid': productid });
 export const createCart = (values) => new UserModel(values).save().then((user) => user.toObject());
 export const deleteCartById = (id) => UserModel.findOneAndDelete({ _id: id });
