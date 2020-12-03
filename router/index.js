const express = require("express");
const router = express.Router();
// const Login = require("./login/index");
const Company = require("./company/company");
const Login = require("./login/index");
const Product = require("./product/index");

const Userpro = require("./user/index");
const Aboutus = require("./about/index");
const Company = require("./company/company");
const Home = require("./home/home");
const Qualifications = require("./qualifications/qualifications");
router.get("/", (req, res) => {
  res.json({
    code: 200,
    message: "欢迎进入9700"
  });
});

router.get("/user", Login.getUser);
// 产品中心
router.post("/product", Product.getdata);
// 用户案例
router.get("/userpro", Userpro.getUserProject);
// 关于我们
router.get("/aboutus", Aboutus.getAboutData);
// 公司动态
router.get("/company", Company.getCompanyData);
// 公司动态详情
router.get("/company/detail", Company.getCompanyDetailData);
// 资质证明
router.post("/qualifications", Qualifications.getConnect);
// 留言
router.post("/message", Home.takeMessage);

module.exports = router;
