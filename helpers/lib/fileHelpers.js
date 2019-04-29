const keystone = require('keystone');
const path = require('path');
const uniqid = require('uniqid');
const Types = keystone.Field.Types;

const generateFilename = file => `${path.basename(file.originalname)}-${uniqid()}${path.extname(file.originalname)}`;

const defaultImageOptions = {
  autoCleanup: true,
  width: 512,
  height: 512,
  initial: true,
  generateFilename
}
const imageType = options => ({
  type: Types.CloudinaryImage,
  ...Object.assign({}, defaultImageOptions, options)
});
module.exports = {
  imageType,
}
