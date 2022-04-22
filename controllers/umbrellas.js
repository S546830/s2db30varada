var umbrellas = require('../models/umbrellas');

// List of all umbrellas
exports.umbrellas_list = async function(req, res) {
    try{
    theumbrellas = await umbrellas.find();
    res.send(theumbrellas);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

//exports.umbrellas_list = function(req, res) {
 //res.send('NOT IMPLEMENTED: umbrellas list');
//};
// for a specific umbrellas.
exports.umbrellas_detail = async function(req, res) {
 //res.send('NOT IMPLEMENTED: umbrellas detail: ' + req.params.id);
 console.log("detail" + req.params.id)
 try {
 result = await umbrellas.findById( req.params.id)
 res.send(result)
 } catch (error) {
 res.status(500)
 res.send(`{"error": document for id ${req.params.id} not found`);
 }
};
// Handle umbrellas create on POST.
exports.umbrellas_create_post = async function(req, res) {
    console.log(req.body)
    let document = new umbrellas();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.itemname= req.body.itemname;
    document.quantity = req.body.quantity;
    document.price= req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle umbrellas delete form on DELETE.
//exports.umbrellas_delete = function(req, res) {
 //res.send('NOT IMPLEMENTED: umbrellas delete DELETE ' + req.params.id);
//};
// Handle Costume delete on DELETE. 
exports.umbrellas_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await umbrellas.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
// Handle umbrellas update form on PUT.
exports.umbrellas_update_put = async function(req, res) {
    //res.send('NOT IMPLEMENTED: umbrellas update PUT' + req.params.id);
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await umbrellas.findById( req.params.id)
 // Do updates of properties
 if(req.body.itemname)
 toUpdate.itemname = req.body.itemname;
 if(req.body.quantity) toUpdate.quantity = req.body.quantity;
 if(req.body.price) toUpdate.price = req.body.price;
 let result = await toUpdate.save();
 console.log("Success " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};


// VIEWS
// Handle a show all view
exports.umbrellas_view_all_Page = async function(req, res) {
    try{
    theumbrellas = await umbrellas.find();
    res.render('umbrellas', { title: 'umbrellas Search Results', results: theumbrellas });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   exports.umbrellas_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await umbrellas.findById( req.query.id)
    res.render('umbrellasdetail',
   { title: 'umbrellas Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   exports.umbrellas_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('umbrellascreate', { title: 'umbrellas Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   exports.umbrellas_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await umbrellas.findById(req.query.id)
    res.render('umbrellasupdate', { title: 'umbrellas Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   exports.umbrellas_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await umbrellas.findById(req.query.id)
    res.render('umbrellasdelete', { title: 'umbrellas Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };