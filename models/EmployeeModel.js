const Joi = require('joi')
const AbstractModel = require('./AbstractModel')

const schemaFactory = () => ({
  avatar: Joi.object(),
  name: Joi.string(),
  position: Joi.string(),
})

module.exports.schemaFactory = schemaFactory

module.exports.model = class EmployeeModel extends AbstractModel {
  constructor (data, options) {
    super(data, schemaFactory, options)
    Object.freeze(this)
  }

  static fromMongo (data, context, options) {
    if (data == null) {
      return null
    }

    return new EmployeeModel({
      avatar: data.avatar,
      name: data.name,
      position: data.position,
    })
  }
}
