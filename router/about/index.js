const mysql = require("../../module/mysql");

exports.getAboutData = (req, res) => {
  mysql.open("8.131.83.251", "root", "123456", "technologieCity");
  let sql = "SELECT * FROM about ";
  mysql.handleData(
    sql,
    null,
    result => {
      res.json({
        code: 200,
        data: result
      });
    },
    err => {
      console.log(err);
    }
  );
  mysql.close();
};
