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
      required: true,
    },
    amount_float: {
      type: String,
      required: true,
    },
    // type_of_expense: [ExpenseType],
    expense_type: {
      type: String,
      enum: ["Gas", "Air Travel", "Car Rental", "Food", "Equipment", "Shipping", "Misc"]
    },
    description: {
      type: String,
      // required: true
    },
    date_of_expense: {
      type: Date,
    },
    report_id: {
      type: Schema.Types.ObjectId,
      ref: "Report"
    },
    // submitted_by: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    // },
  },
  /* Options */ {
    timestamps: true,
  }
);


const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;