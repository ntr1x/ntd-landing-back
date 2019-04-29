var keystone = require('keystone');
var Types = keystone.Field.Types;

var Contact = new keystone.List('Contact');

Contact.add({
  phones: { type: Types.Relationship, ref: 'ContactsPhones', initial: true, required: true, many: true },
  skype: { type: String, required: true, initial: true },
  telegram: { type: String, required: true, initial: true },
});

Contact.schema.virtual('canAccessKeystone').get(function () {
  return true;
});

Contact.schema.pre('save', function (next) {
  return next();
});
Contact.register();
