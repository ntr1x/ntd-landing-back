var keystone = require('keystone');
var Types = keystone.Field.Types;

var Reason = new keystone.List('Reason');

Reason.add({
  lines: { type: Types.TextArray, required: true, initial: true },
  // secondLine: { type: String, required: true, initial: true },
  // thirdLine: { type: String, required: true, initial: true },
  // fourthLine: { type: String, required: true, initial: true },
});

Reason.schema.virtual('canAccessKeystone').get(function () {
  return true;
});

Reason.schema.pre('save', function (next) {
  return next();
});
Reason.register();
