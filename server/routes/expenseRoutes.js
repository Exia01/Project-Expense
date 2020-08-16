const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

//-- Route -> "/expense/"
router.get('/', (req, res) => {
    console.log("Get All Expense Route");
    console.log("<><><><><>")
    Expense
        .find({})
        .then(results => {
            console.log(results);
            res.json({ "success": true, all_exp: results });
        })
        .catch(err => {
            console.log(err)
            res.json(err);
        })
});

//-- Route -> "/expense/"
router.post('/', (req, res) => {
    console.log("Posting to Expense Route");
    console.log("<><><><><>")
    console.log(`User : ${req.user}`);
    console.log(req.body);

    const { title, amount, amount_float, expense_type, description, date_of_expense } = req.body;

    let expenseOjb = {
        title: title,
        amount: amount,
        amount_float: amount_float,
        expense_type: expense_type,
        description: description,
        date_of_expense: date_of_expense
    }

    Expense.create(expenseOjb, (err, data) => {
        if(err) {
            console.log(err);
            res.status(500).json(err);
        }

        console.log("... Expense Instance Created ...")
        console.log(data);

        res.status(204).json({ "success": true, data: data });
    });

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