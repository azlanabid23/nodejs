const app = require('express')();
const http = require('http').Server(app);

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://azlanabid2003:QZNjOlDNV81s0CaO@cluster0.b9ox3n3.mongodb.net/?retryWrites=true&w=majority');

const user = require('./model/usermodel');

async function insert ()
{
     await user.create({
          name : 'azlan',
          email: 'azlan@gmail.com'
     });
}
insert()

http.listen(3000,function(){
     console.log('server is running');

}); 