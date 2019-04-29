var keystone = require('keystone');
var Types = keystone.Field.Types;
const { imageType } = require('../helpers');

var Employee = new keystone.List('Employee');

Employee.add({
  avatar: imageType({ folder: 'images', label: 'Avatar', noedit: true }),
  name: { type: String, required: true, initial: true },
  position: { type: String, required: true, initial: true },
});

Employee.schema.virtual('canAccessKeystone').get(function () {
  return true;
});

Employee.schema.pre('save', function (next) {
  return next();
});
Employee.register();
