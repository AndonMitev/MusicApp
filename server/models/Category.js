const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const categorySchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'] },
  albums: [{ type: ObjectId, ref: 'Album', default: [] }],
  createdOn: { type: Date, default: Date.now }
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
