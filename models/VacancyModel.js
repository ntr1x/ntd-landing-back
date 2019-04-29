const Joi = require('joi')
const AbstractModel = require('./AbstractModel')

const schemaFactory = () => ({
  avatar: Joi.object(),
  title: Joi.string(),
  wage: Joi.string(),
  period: Joi.string()
})

module.exports.schemaFactory = schemaFactory

module.exports.model = class VacancyModel extends AbstractModel {
  constructor (data, options) {
    super(data, schemaFactory, options)
    Object.freeze(this)
  }

  static fromMongo (data, context, options) {
    if (data == null) {
      return null
    }

    return new VacancyModel({
      avatar: data.avatar,
      title: data.title,
      wage: data.wage,
      period: data.period
    })
  }
}
