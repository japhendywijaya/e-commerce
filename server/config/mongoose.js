const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser:true})


const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose connected')
});