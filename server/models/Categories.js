const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const categoriesSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'] },
  albums: [{ type: [ObjectId], ref: 'Album', default: [] }],
  likes: [{ type: [ObjectId], ref: 'User', default: [] }],
  imageUrl: { type: String, required: [true, 'Image url is required'] },
  createdOn: { type: Date, default: Date.now },
  description: { type: String, required: [true, 'Description is required'] }
});

const Categories = mongoose.model('Categories', categoriesSchema);
module.exports = Categories;
