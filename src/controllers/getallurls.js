import URLModel from "../db/url.model.js";


export const getAllUrls = async (req, res) => {
    try {
      const users = await URLModel.find();;
  
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

export default getAllUrls;