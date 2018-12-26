const mongoose = require('mongoose');

mongoose.connect('mongodb://ceci:ceci1234@ds129914.mlab.com:29914/o-art-database', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

// COMPROVAR QUE FUNCIONA
//.then(db => console.log('DB is connected'))
//   .catch(err => console.error(err));