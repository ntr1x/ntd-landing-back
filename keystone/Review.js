var keystone = require('keystone');
var Types = keystone.Field.Types;
const { imageType } = require('../helpers');

var Review = new keystone.List('Review');

Review.add({
  avatar: imageType({ folder: 'images', label: 'Avatar', noedit: true }),
  name: { type: String, required: true, initial: true },
  position: { type: String, required: true, initial: true },
  review: { type: String, required: true, initial: true },
});

Review.schema.virtual('canAccessKeystone').get(function () {
  return true;
});

Review.schema.pre('save', function (next) {
  return next();
});
Review.register();
