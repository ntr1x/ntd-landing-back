var keystone = require('keystone');
var Types = keystone.Field.Types;
const { imageType } = require('../helpers');

var Vacancy = new keystone.List('Vacancy');

Vacancy.add({
  avatar: imageType({ folder: 'images', label: 'Avatar', noedit: true }),
  title: { type: String, required: true, initial: true },
  wage: { type: String, required: true, initial: true },
  period: { type: String, required: true, initial: true },
});

Vacancy.schema.virtual('canAccessKeystone').get(function () {
  return true;
});

Vacancy.schema.pre('save', function (next) {
  return next();
});
Vacancy.register();
