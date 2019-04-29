const Joi = require('joi')
const AbstractModel = require('./AbstractModel')

const schemaFactory = () => ({
  name: Joi.string(),
  quantity: Joi.string(),
  specialist: Joi.string(),
})

module.exports.schemaFactory = schemaFactory

module.exports.model = class AreaStatisticsModel extends AbstractModel {
  constructor (data, options) {
    super(data, schemaFactory, options)
    Object.freeze(this)
  }

  static fromMongo (data, context, options) {
    if (data == null) {
      return null
    }
    return new AreaStatisticsModel({
      name: data.name,
      quantity: data.quantity,
      specialist: data.specialist,
    })
  }
}
