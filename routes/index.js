var keystone = require('keystone')
const express = require('express')
var cors = require('cors')
var app = express()
const { landingService } = require('../services')


const router = express.Router()
router.use(cors())
router.all('/api*', keystone.middleware.cors);
router.get('/reasons', async (req, res) => {
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  const reason = await landingService.getReason();
  res.send(reason)
});
router.get('/slogans', async (req, res) => {
  const slogan = await landingService.getSlogan();
  res.send(slogan)
});
router.get('/vacancies', async (req, res) => {
  const vacancy = await landingService.getVacancy();
  res.send(vacancy)
});
router.get('/areas', async (req, res) => {
  const area = await landingService.getAreas();
  res.send(area)
});
router.get('/projects', async (req, res) => {
  const project = await landingService.getProject();
  res.send(project)
});
router.get('/reviews', async (req, res) => {
  const review = await landingService.getReview();
  res.send(review)
});
router.get('/employees', async (req, res) => {
  const employee = await landingService.getEmployee();
  res.send(employee)
});
router.get('/contacts', async (req, res) => {
  const contact = await landingService.getContact();
  res.send(contact)
});
module.exports = router
