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
        },
        user: {
                type: mongoose.Schema.Types.ObjectId, ref:"Users",required: true
        }
    
},
{
    timestamps: true 
 }
);
const Items = mongoose.model('Items',items_schema)

module.exports = Items;