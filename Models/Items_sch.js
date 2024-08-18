const mongoose = require('mongoose');

const items_schema = mongoose.Schema({
    
        
        name: {
        type: String,
        required: [true,
                "This is a must and name should be given"
        ]
        },
        price: {
        type: Number,
        required: true
        },
        origin: {
        type: String,
        required: false
        }
    
},
{
    timestamps: true 
 }
);
const Items = mongoose.model('Items',items_schema)

module.exports = Items;