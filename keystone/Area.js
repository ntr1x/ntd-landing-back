var keystone = require('keystone');
var Types = keystone.Field.Types;

var Area = new keystone.List('Area');

Area.add({
  title: { type: String, required: true, initial: true },
  about: { type: String, required: true, initial: true },
  statistics: { type: Types.Relationship, ref: 'AreaStatistics', initial: true, required: true, many: true },
  tags: { type: Types.TextArray, required: true, initial: true }
});

Area.schema.virtual('canAccessKeystone').get(function () {
  return true;
});

Area.schema.pre('save', function (next) {
  return next();
});
Area.register();
