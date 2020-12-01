const express = require("express");
const router = express.Router();
const Login = require("./login/index");
const Qualifications = require('./qualifications/qualifications')
router.get("/", (req, res) => {
  res.json({
    code: 200,
    message: "欢迎进入9700",
  });
});

router.get("/user", Login.getUser);
router.post('/qualifications',Qualifications.getConnect)

module.exports = router;
