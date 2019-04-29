var keystone = require('keystone');
var Types = keystone.Field.Types;

var Slogan = new keystone.List('Slogan');

Slogan.add({
  firstLine: { type: String, required: true, initial: true },
  secondLine: { type: String, required: true, initial: true },
});

Slogan.schema.virtual('canAccessKeystone').get(function () {
  return true;
});

Slogan.schema.pre('save', function (next) {
  return next();
});
Slogan.register();
