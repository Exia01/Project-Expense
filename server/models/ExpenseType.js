const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const expenseTypeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
        type: Number
    }
  },
  /* Options */ {
    timestamps: true,
  }
);

const ExpenseType = mongoose.model("ExpenseType", expenseTypeSchema);

module.exports = ExpenseType;
