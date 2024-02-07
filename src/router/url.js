import redirect from '../controllers/redirects.controller.js';
import url from '../controllers/url.controller.js';
import deleteurl from '../controllers/url.controller.js'

export default (router) => {
  router.post('/api/url', url);
  router.get('/:code',redirect);
  router.delete('/api/deleteurl/:id',deleteurl);
};