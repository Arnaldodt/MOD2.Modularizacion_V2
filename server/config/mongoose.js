const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Usuario', {useNewUrlParser: true});
module.exports = mongoose;





