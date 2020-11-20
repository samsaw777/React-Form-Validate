const mongoose = require('mongoose');

const feedschema = mongoose.Schema({
    fullname:{
        type: String,
        require: true
    },
    streetone:{
        type: String,
        require: true
    },
    streettwo:{
        type: String,
        require: true
    },
    city:{
        type: String,
        require: true
    },
    district:{
        type: String,
        require: true
    },
    pincode:{
        type: Number,
        require: true
    },
country:{
        type: String,
        require: true
    },
    number:{
        type: Number,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    date:{
        type: String,
        require: true
    },
    gender:{
        type: String,
        require: true
    },
    school:{
        type: String,
        require: true
    },
    college:{
        type: String,
        require: true
    },
    yearsa:{
        type: Number,
        require: true
    },
    astudy:{
        type: String,
        require: true
    },
    graduteschool:{
        type: String,
        require: true
    },
    yearsas:{
        type: Number,
        require: true
    },
    skills:{
        type: String,
        require: true
    },
    qualification:{
        type: String,
        require: true
    },
    current:{
        type: String,
        require: true
    },
    position:{
        type: String,
        require: true
    },
    salary:{
        type: Number,
        require: true
    },
    reason:{
        type: String,
        require: true
    }
},{
    timestamps: true 
});

module.exports = mongoose.model('sackbin',feedschema);