const Joi = require('joi')
const AbstractModel = require('./AbstractModel')
const ContactPhonesModel = require('./ContactPhonesModel').model

const schemaFactory = () => ({
  phones: Joi.array(),
  skype: Joi.string(),
  telegram: Joi.string(),
})

module.exports.schemaFactory = schemaFactory

module.exports.model = class ContactModel extends AbstractModel {
  constructor (data, options) {
    super(data, schemaFactory, options)
    Object.freeze(this)
  }

  static fromMongo (data, context, options) {
    if (data == null) {
      return null
    }

    return new ContactModel({
      phones: data.phones.map(ContactPhonesModel.fromMongo),
      skype: data.skype,
      telegram: data.telegram
    })
  }
}
