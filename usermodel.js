const mongoose = require('mongoose');
const userSchema = new mongoose.userSchema({

    name: string, 
    email: string
});
module.exports = mongoose.model('user',userSchema);