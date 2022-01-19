const router = require('express').Router({ mergeParams: true });

router.get('/', require('./chat'));

module.exports = router;
