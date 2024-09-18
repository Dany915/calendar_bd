const {Router} = require('express');
const { eventGet, 
        eventPut, 
        eventPost, 
        eventDelete 
      } = require('../controllers/event');

const router = Router();

router.get('/', eventGet);

router.put('/:id', eventPut);

router.post('/', eventPost);

router.delete('/', eventDelete);

module.exports = router;