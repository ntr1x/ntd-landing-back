const Joi = require('joi')
const AbstractModel = require('./AbstractModel')

const schemaFactory = () => ({
  name: Joi.string(),
  phones: Joi.array(),
})

module.exports.schemaFactory = schemaFactory

module.exports.model = class ContactPhonesModel extends AbstractModel {
  constructor (data, options) {
    super(data, schemaFactory, options)
    Object.freeze(this)
  }

  static fromMongo (data, context, options) {
    if (data == null) {
      return null
    }

    return new ContactPhonesModel({
      name: data.name,
      phones: data.phones,
    })
  }
}
