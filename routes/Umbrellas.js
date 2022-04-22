var express = require('express');
const umbrellas_controllers= require('../controllers/umbrellas');
var router = express.Router();
/* GET umbrellas */
router.get('/', umbrellas_controllers.umbrellas_view_all_Page );
module.exports = router;
/* GET detail Umbrellas page */
router.get('/detail',umbrellas_controllers.umbrellas_view_one_Page);

/* GET create costume page */
router.get('/create',umbrellas_controllers.umbrellas_create_Page);

/* GET create update page */
router.get('/update',umbrellas_controllers.umbrellas_update_Page);

/* GET delete costume page */
router.get('/delete',umbrellas_controllers.umbrellas_delete_Page);