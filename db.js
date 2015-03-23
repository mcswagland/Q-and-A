var mongoose = require('mongoose')
//mongoose.connect('mongodb://localhost/social', function () {
mongoose.connect('mongodb://localhost/AskStudents', function() {
  console.log('mongodb connected')
})
module.exports = mongoose
