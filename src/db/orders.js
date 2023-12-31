import mongoose from 'mongoose';

// User Config
const UserSchema = new mongoose.Schema({
  productid: { type: Number, required: true },
  userid: { type: String, required: true },
  orderid: { type: String, required: true },
  date: { type: String, required: true },
  quantity: { type: Number, required: true },
});

 export const UserModel = mongoose.model('orders', UserSchema);

// User Actions
 export const getorders = () => UserModel.find();
 export const getordersById = (id) => UserModel.findById(id);
 export const getproductById = (productid) => UserModel.findOne({ 'productid': productid });
 export const createorders = (values) => new UserModel(values).save().then((user) => user.toObject());
 export const deleteordersById = (id) => UserModel.findOneAndDelete({ _id: id });
