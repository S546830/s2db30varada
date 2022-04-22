var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var umbrellas_controller = require('../controllers/umbrellas');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// umbrellas ROUTES ///
// POST request for creating a umbrellas.
router.post('/umbrellas', umbrellas_controller.umbrellas_create_post);
// DELETE request to delete umbrellas.
router.delete('/umbrellas/:id', umbrellas_controller.umbrellas_delete);
// PUT request to update umbrellas.
router.put('/umbrellas/:id',umbrellas_controller.umbrellas_update_put);
// GET request for one umbrellas.
router.get('/umbrellas/:id', umbrellas_controller.umbrellas_detail);
// GET request for list of all umbrellas items.
router.get('/umbrellas', umbrellas_controller.umbrellas_list);
module.exports = router;