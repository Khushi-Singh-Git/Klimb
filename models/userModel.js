var mongoose = require('mongoose');

/*var excelSchema = new mongoose.Schema({  
    name:{  
        type:String  
    },  
    email:{  
        type:String  
    },    
    age:{  
        type:Number  
    }
}); */
/**
var excelSchema = new mongoose.Schema({  
    name:{  
        type:String  
    },  
    address:{  
        type:String  
    },    
    age:{  
        type:String  
    }
});
*/

var excelSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: [true, 'email already exist already exist']
    },
    mobile: {
        type: String
    },
    dob: {
        type: String
    },
    experience: {
        type: String
    },
    resume: {
        type: String
    },
    clocation: {
        type: String
    },
    address: {
        type: String
    },
    cemployer: {
        type: String
    },
    cdesignation: {
        type: String
    }
});



excelSchema.statics.isThisEmailInUse = async function (email) {
    if (!email) throw new Error('Invalid Email');
    try {
        const user = await this.findOne({ email });
        if (user) return false;

        return true;
    } catch (error) {
        console.log('error inside isThisEmailInUse method', error.message);
        return false;
    }
};



module.exports = mongoose.model('userModel', excelSchema);