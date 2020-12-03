const express = require("express");
const router = express.Router();
const Login = require("./login/index");
const Company = require('./company/company')
const Home = require('./home/home')
const Qualifications = require('./qualifications/qualifications')
router.get("/", (req, res) => {
  res.json({
    code: 200,
    message: "欢迎进入9700",
  });
});
router.get("/user", Login.getUser);
router.get("/company", Company.getCompanyData);
router.get("/company/detail", Company.getCompanyDetailData);
router.post('/qualifications',Qualifications.getConnect);
router.post('/message',Home.takeMessage)

module.exports = router;
