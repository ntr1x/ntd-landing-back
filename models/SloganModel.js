const Joi = require('joi')
const AbstractModel = require('./AbstractModel')

const schemaFactory = () => ({
  firstLine: Joi.string(),
  secondLine: Joi.string(),
})

module.exports.schemaFactory = schemaFactory

module.exports.model = class SloganModel extends AbstractModel {
  constructor (data, options) {
    super(data, schemaFactory, options)
    Object.freeze(this)
  }

  static fromMongo (data, context, options) {
    if (data == null) {
      return null
    }

    return new SloganModel({
      firstLine: data.firstLine,
      secondLine: data.secondLine
    })
  }
}
