const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');


const companiesSchema = mongoose.Schema(
  {
    pid: {
      type: String,
      required: true,
      trim: true,
    },
   
    pname: {
      type: Number,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
companiesSchema.plugin(toJSON);
companiesSchema.plugin(paginate);



/**
 * @typedef Companies
 */
const Companies = mongoose.model('Companies', companiesSchema);

module.exports = Companies;
// ung nho hoang viet