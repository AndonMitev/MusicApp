const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const albumSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'] },
  image: { type: String },
  year: { type: Number, required: [true, 'Year is required'] },
  author: { type: String, required: [true, 'Author is required'] },
  categories: {
    type: ObjectId,
    ref: 'Categories',
    required: [true, 'Category is required']
  },
  songs: [{ type: [ObjectId], ref: 'Song', default: [] }],
  createdOn: { type: Date, default: Date.now }
});

const Album = mongoose.model('Album', albumSchema);
module.exports = Album;
