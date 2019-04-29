var keystone = require('keystone');
var Types = keystone.Field.Types;

var ContactsPhones = new keystone.List('ContactsPhones');

ContactsPhones.add({
  name: { type: String, required: true, initial: true },
  phones: { type: Types.TextArray, required: true, initial: true },
});

ContactsPhones.schema.virtual('canAccessKeystone').get(function () {
  return true;
});

ContactsPhones.schema.pre('save', function (next) {
  return next();
});
ContactsPhones.register();
