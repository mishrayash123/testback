import validUrl from "valid-url";
import shortid from "shortid";
import URLModel from "../db/url.model.js";
import generateShortId from "../helpers/utils.js";

const baseUrl = "https://urlshortner-iakh.onrender.com";


const generateUniqueShortId = async () => {
    let shortId;
    let existingURL;

    while (true) {
        shortId = generateShortId();
        existingURL = await URLModel.findOne({ urlCode: shortId });

        if (!existingURL) {
            break;
        }
    }
    return shortId;
};

export const url = async (req, res) => {
    const { longUrl, urlCode,userid } = req.body;

    try {

        if (!validUrl.isUri(longUrl)) {
            return res.status(401).json({ error: "Invalid Url" });
        }


        if (urlCode) {
            const existingCodeBookmark = await URLModel.findOne({ urlCode });

            if (existingCodeBookmark) {
                return res.status(400).json({ error: `Code ${urlCode} already in use. Please choose a different code.` });
            }
        }

        const existingURL = await URLModel.findOne({ longUrl });

        if (existingURL && !urlCode) {
            return res.json({ urlCode: existingURL.urlCode });
        }

        let generatedCode;
        if (!urlCode) {
            generatedCode = await generateUniqueShortId();
        } else {
            generatedCode = urlCode;
        }
        const shortUrl = `${baseUrl}/${generatedCode}`;

        const newURL = new URLModel({
            urlCode: generatedCode,
            longUrl,
            shortUrl,
            userid
        });
        await newURL.save();
        res.status(200).json(newURL).end();
    } catch (error) {
        console.error('Error shortening URL:', error);
        res.status(500).json({ error: 'Failed to shorten URL' });
    }
  }


  export default url;