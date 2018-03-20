const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

let LogSchema = new Schema({
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
    }
});

module.exports = mongoose.model('Log', LogSchema);