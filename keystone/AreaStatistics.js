var keystone = require('keystone');
var Types = keystone.Field.Types;

var AreaStatistics = new keystone.List('AreaStatistics');

AreaStatistics.add({
  name: { type: String, required: true, initial: true },
  quantity: { type: String, required: true, initial: true },
  specialist: { type: String, required: true, initial: true },
});

AreaStatistics.schema.virtual('canAccessKeystone').get(function () {
  return true;
});

AreaStatistics.schema.pre('save', function (next) {
  return next();
});
AreaStatistics.register();
