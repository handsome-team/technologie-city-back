const mysql = require("../../module/mysql");

mysql.open("8.131.83.251", "root", "123456", "technologieCity");

exports.getCompanyDetailData = (req, res) => {
  let { id } = req.query;
  let sql = "SELECT * FROM company WHERE id=?";
  mysql.handleData(
    sql,
    id,
    (result) => {
      console.log(result);
      res.json({
        code: 200,
        data: result,
      });
    },
    (err) => {
      console.log(err);
    }
  );
  mysql.close();
};

// 获取公司动态数据
exports.getCompanyData = (req, res) => {
  let sql = "SELECT * FROM `company`";
  mysql.handleData(
    sql,
    null,
    (result) => {
      console.log(result);
      res.json({
        code: 200,
        data: result,
      });
    },
    (err) => {
      console.log(err);
    }
  );
  mysql.close();
};
