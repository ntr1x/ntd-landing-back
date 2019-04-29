const keystone = require('keystone')

const Reason = keystone.list('Reason').model
const Slogan = keystone.list('Slogan').model
const Vacancy = keystone.list('Vacancy').model
const Area = keystone.list('Area').model
const AreaStatistics = keystone.list('AreaStatistics').model
const Project = keystone.list('Project').model
const Review = keystone.list('Review').model
const Employee = keystone.list('Employee').model
const Contact = keystone.list('Contact').model
const {
  ReasonModel,
  SloganModel,
  VacancyModel,
  AreaModel,
  AreaStatisticsModel,
  ProjectModel,
  ReviewModel,
  EmployeeModel,
  ContactModel,
} = require('../../models')

class LandingService {
  async getReason () {
    const list = await Reason
      .find({})
    return list.map(ReasonModel.fromMongo)
  }
  async getSlogan () {
    const list = await Slogan
      .find({})
    return list.map(SloganModel.fromMongo)
  }
  async getVacancy () {
    const list = await Vacancy
      .find({})
    return list.map(VacancyModel.fromMongo)
  }
  async getAreas () {
    const list = await Area
      .find().populate('statistics')
    return list.map(AreaModel.fromMongo)
  }
  async getProject () {
    const list = await Project
      .find({})
    return list.map(ProjectModel.fromMongo)
  }
  async getReview () {
    const list = await Review
      .find({})
    return list.map(ReviewModel.fromMongo)
  }
  async getEmployee () {
    const list = await Employee
      .find({})
    return list.map(EmployeeModel.fromMongo)
  }
  async getContact () {
    const list = await Contact
      .find({}).populate('phones')
    return list.map(ContactModel.fromMongo)
  }
}
module.exports = LandingService
