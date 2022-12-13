const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let aadharSchema = new Schema({

  number: {
    type: Number
  },
  name: {
    type: String
  },
  dataOfbirth: {
  
      type: Date,
      required: true,
      trim: true,
  
  },
  address: {
    type: String
  },
  email: {
    type: String
  },
  mobileno: {
    type: Number
  },
  linkedpanno: {
    type: Number
  },
  linkedpassportno: {
    type: Number
  },
  linkedbankaccountno: {
    type: Number
  }
}, {
    collection: 'aadhar'
  })
module.exports = mongoose.model('Aadhar', aadharSchema)