import deleteurlById from '../db/url.model.js'
import URLModel from "../db/url.model.js";

export const deleteurl = async (req, res) => {
    try {
      const { id } = (req.params);
      const deletedUser = await URLModel.findOneAndDelete({ _id: id });
  
      return res.json(deletedUser);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

  export default deleteurl;