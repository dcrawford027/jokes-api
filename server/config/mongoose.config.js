const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokesdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log(err))