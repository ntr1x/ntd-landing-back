const Joi = require('joi')
const AbstractModel = require('./AbstractModel')

const schemaFactory = () => ({
  avatar: Joi.object(),
  title: Joi.string(),
  about: Joi.string(),
})

module.exports.schemaFactory = schemaFactory

module.exports.model = class ProjectModel extends AbstractModel {
  constructor (data, options) {
    super(data, schemaFactory, options)
    Object.freeze(this)
  }

  static fromMongo (data, context, options) {
    if (data == null) {
      return null
    }

    return new ProjectModel({
      avatar: data.avatar,
      title: data.title,
      about: data.about,
    })
  }
}
