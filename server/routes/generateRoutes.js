const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("Hit Read Route");
    // res.send("Hello There");
    res.render('../client/public/views/generate/index');
    // res.render('/generate/index')

});


module.exports = router;