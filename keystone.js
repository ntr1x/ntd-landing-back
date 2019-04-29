var keystone = require('keystone');

keystone.init({
  'cookie secret': 'secure string goes here',
  'name': 'my-project',
  'user model': 'User',
  'auto update': true,
  'auth': true,
  'cloudinary config': 'cloudinary://249826192627179:iIeTIA3F9iz9jtRyKgUlyC8TaGo@ntdproject',
  'cloudinary folders': true,
});
keystone.import('keystone');
keystone.set('cors allow origin', true);
keystone.set('routes', require('./routes'));
keystone.start();
