const express = require('express');
const router = express.Router();

//-- Route -> "/expense/"
router.get('/', (req, res) => {
    console.log("Hit Expense Route");
    console.log("<><><><><>")
    res.json({ "success": true });
});

//-- Route -> "/expense/"
router.post('/', (req, res) => {
    console.log("Hit Expense Route");
    console.log("<><><><><>")
    console.log(req.body);
    res.json({ "success": true });
});

//-- Route -> "/expense/type"
router.get('/type', (req, res) => {
    console.log("Hit ExpenseType Route");
    console.log("<><><><><>");
    console.log(req.body);
    res.json({ "success": true });
});

//-- Route -> "/expense/type"
router.post('/type', (req, res) => {
    console.log("Hit ExpenseType Route");
    console.log("<><><><><>");
    console.log(req.body);
    res.json({ "success": true });
});


module.exports = router;