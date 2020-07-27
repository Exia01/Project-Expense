const express = require('express');
const router = express.Router();
const ExpenseType = require('../models/ExpenseType');

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
    const { name, rating } = req.body;

    ExpenseType.create({
        name: name,
        rating: rating
    }).then(data => {
        console.log(data);
        res.status(200).json(data);
    }).catch(err => {
        console.log(err);
        res.status(403).json(err);
    });
});


module.exports = router;