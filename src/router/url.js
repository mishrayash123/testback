import redirect from '../controllers/redirects.controller.js';
import url from '../controllers/url.controller.js';
import deleteurl from '../controllers/deleteurl.js'
import getAllUrls from '../controllers/getallurls.js'

export default (router) => {
  router.post('/api/url', url);
  router.get('/:code',redirect);
  router.get('/geturls',getAllUrls);
  router.delete('/api/deleteurl/:id',deleteurl);
};