const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reportSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reason_for_travel: {
      type: String,
      required: true,
    },
    submitted_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    date_submitted: {
      type: Date,
    },
    date_approved: {
      type: Date,
    },
    all_expenses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Expense",
      },
    ],
    /* Mongoose saves Floating Point Numbers as Strings (...parseFloat() ) */
    total_amount: {
      type: Number,
      required: true,
    },
  },
  /* Options */ {
    timestamps: true,
  }
);


const Report = mongoose.model("Report", reportSchema);

module.exports = Report;