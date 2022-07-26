const mongoose = require('mongoose');
// optional shortcut variable
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      match: /.{10,}/
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
  }, {
    // Automatic createdAt & updatedAt properties
    timestamps: true
  });


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
reviews: [reviewSchema]

}); 

module.exports = mongoose.model('car', carSchema);