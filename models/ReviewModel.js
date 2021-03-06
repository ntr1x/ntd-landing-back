const Joi = require('joi')
const AbstractModel = require('./AbstractModel')

const schemaFactory = () => ({
  avatar: Joi.object(),
  name: Joi.string(),
  position: Joi.string(),
  review: Joi.string()
})

module.exports.schemaFactory = schemaFactory

module.exports.model = class ReviewModel extends AbstractModel {
  constructor (data, options) {
    super(data, schemaFactory, options)
    Object.freeze(this)
  }

  static fromMongo (data, context, options) {
    if (data == null) {
      return null
    }

    return new ReviewModel({
      avatar: data.avatar,
      name: data.name,
      position: data.position,
      review: data.review
    })
  }
}
