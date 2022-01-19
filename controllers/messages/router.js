const router = require('express').Router({ mergeParams: true });

router.get('/', require('./getAll'));

module.exports = router;
