const AbstractModel = require('./AbstractModel').model
const ReasonModel = require('./ReasonModel').model
const SloganModel = require('./SloganModel').model
const VacancyModel = require('./VacancyModel').model
const AreaModel = require('./AreaModel').model
const ProjectModel = require('./ProjectModel').model
const ReviewModel = require('./ReviewModel').model
const EmployeeModel = require('./EmployeeModel').model
const ContactModel = require('./ContactModel').model
const AreaStatisticsModel = require('./AreaStatisticsModel').model
const ContactPhonesModel = require('./ContactPhonesModel').model

module.exports = {
  ...AbstractModel,
  ...ReasonModel,
  ...SloganModel,
  ...VacancyModel,
  ...AreaModel,
  ...ProjectModel,
  ...ReviewModel,
  ...EmployeeModel,
  ...ContactModel,
  ...AreaStatisticsModel,
  ...ContactPhonesModel,
  AbstractModel,
  ReasonModel,
  SloganModel,
  VacancyModel,
  AreaModel,
  ProjectModel,
  ReviewModel,
  EmployeeModel,
  ContactModel,
  AreaStatisticsModel,
  ContactPhonesModel,
}
