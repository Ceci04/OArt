const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/articulos-db', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

// COMPROVAR QUE FUNCIONA
//.then(db => console.log('DB is connected'))
//   .catch(err => console.error(err));