const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const peopleSchema = mongoose.Schema(
  {
    PName: {
      type: String,
      required: true,
      trim: true,
    },
    Sex: {
      type: Boolean,
      trim: true,
    },
    Phone: {
      type: String,
      trim: true,
    },
    Address: {
      type: String,
      required: true,
      trim: true,
    },
    PID: {
      type: String,
      required: true,
      trim: true,
    },
    DOB: {
      type: Date,
      required: true,
      trim: true,
    },
    
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
peopleSchema.plugin(toJSON);
peopleSchema.plugin(paginate);


/**
 * @typedef People
 */
const People = mongoose.model('People', peopleSchema);

module.exports = People;
