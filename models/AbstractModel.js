const Joi = require('joi')

module.exports = class AbstractModel {
  constructor (data, schema, options = {}) {
    try {
      const { error, value } = Joi.validate(
        (data instanceof Function) ? data(this) : data,
        (schema instanceof Function) ? schema() : schema,
        options
      )
      if (error) {
        console.log(error);
      }
      Object.assign(this, value)
    } catch (e) {
      throw e
    }
  }

  static buildArray (array, buildItem, context) {
    return array == null
      ? null
      : array.map(item => buildItem(item, context))
  }
}
