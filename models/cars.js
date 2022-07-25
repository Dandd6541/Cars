const mongoose = require('mongoose');
// optional shortcut variable
const Schema = mongoose.Schema;


const carSchema = new Schema({
   make: {
       type: String,
       enum: ['Toyota', 'Honda', 'Nissan', 'Acura' ]
   },
   model: {
       type: String,
       enum: ['Corolla','Camary','Rav4', 'Highlander' ],
       default: 'Corolla'
   },
   year: {
       type: Number,
       required: true,
       min: 1995,
       max: 2023
   },
   availability: {
    type: Date,
    default: Date.now() + 365*24*60*60000
},

}); 

module.exports = mongoose.model('car', carSchema);