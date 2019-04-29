var keystone = require('keystone');
var Types = keystone.Field.Types;
const { imageType } = require('../helpers');

var Project = new keystone.List('Project');

Project.add({
  avatar: imageType({ folder: 'images', label: 'Avatar', noedit: true }),
  title: { type: String, required: true, initial: true },
  about: { type: String, required: true, initial: true },
});

Project.schema.virtual('canAccessKeystone').get(function () {
  return true;
});

Project.schema.pre('save', function (next) {
  return next();
});
Project.register();
