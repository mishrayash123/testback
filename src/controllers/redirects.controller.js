import URLModel from '../db/url.model.js';

const redirect = async (req, res) => {
    try {
        const { code } = req.params;
        const url = await URLModel.findOne({
            urlCode: code
        });
        if (url) {
            console.log(url.longUrl)
            return res.redirect(url.longUrl);
        } else {
            return res.status(404).json('No URL Found');
        }

    }
    catch (err) {
        console.error(err);
        res.status(500).json('Server Error');
    }
  }

  export default redirect;
