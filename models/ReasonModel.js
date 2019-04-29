const Joi = require('joi')
const AbstractModel = require('./AbstractModel')

const schemaFactory = () => ({
  lines: Joi.array().items(Joi.string()),
})

module.exports.schemaFactory = schemaFactory

module.exports.model = class ReasonModel extends AbstractModel {
  constructor (data, options) {
    super(data, schemaFactory, options)
    Object.freeze(this)
  }

  static fromMongo (data, context, options) {
    if (data == null) {
      return null
    }

    return new ReasonModel({
      lines: data.lines,
    })
  }
}
