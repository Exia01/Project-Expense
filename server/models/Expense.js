const mongoose = require('mongoose');
const ExpenseType = require('./ExpenseType');

const Schema = mongoose.Schema;

const expenseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    /* Mongoose saves Floating Point Numbers as Strings (...parseFloat() ) */
    amount: {
        type: Number,
        required: true
    },
    type_of_expense: [ExpenseType],
    description: {
        type: String,
        required: true
    },
    submitted_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    date_of_expense: {
      type: Date,
    },
  }, /* Options */ {
        timestamps: true,
     }
);


const Expense = mongoose.model("Expense", reportSchema);

module.exports = Expense;