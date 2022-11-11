const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const ToySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name must be at least 3 character long"],
        unique: true
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be more than 0"]
    },
    category: {
        type: String,
        enum: {
            values: ['Action Figures', 'Animals', 'Cars', 'Construction Toys', 'Creative Toys', 'Dolls', 'Educational Toys', 'Electronic Toys', 'Puzzle', 'Games'],
            message: 'Please select a category'
        }
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [3, "Description must be at least 3 character long"]
    },
    image: {
        type: String,
    },
    hashtag: {
        type: String,
    }

}, {timestamps:true});

const Toy = mongoose.model('Toy', ToySchema);

ToySchema.plugin(uniqueValidator)

module.exports = Toy;