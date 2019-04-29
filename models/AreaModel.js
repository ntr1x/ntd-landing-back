const Joi = require('joi')
const AbstractModel = require('./AbstractModel')
const AreaStatisticsModel = require('./AreaStatisticsModel').model

const schemaFactory = () => ({
  title: Joi.string(),
  about: Joi.string(),
  statistics: Joi.array(),
  tags: Joi.array().items(Joi.string())
})

module.exports.schemaFactory = schemaFactory

module.exports.model = class AreaModel extends AbstractModel {
  constructor (data, options) {
    super(data, schemaFactory, options)
    Object.freeze(this)
  }

  static fromMongo (data, context, options) {
    if (data == null) {
      return null
    }
    return new AreaModel({
      title: data.title,
      about: data.about,
      statistics: data.statistics.map(AreaStatisticsModel.fromMongo),
      tags: data.tags
    })
  }
}
