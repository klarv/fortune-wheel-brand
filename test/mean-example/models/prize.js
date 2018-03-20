const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

let PrizeSchema = new Schema({
    prize_value: {
        type: String,
        required: true
    },
    prize_type: {
        type: String,
        required: true
    },
    prize_probability: {
        type:String,
        required: true
    },
    prize_spots: {
        type: String,
        required: true
    },
    editable:  {
        type: Boolean,
        default: false
    },
    brand_name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Prize', PrizeSchema);