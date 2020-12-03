const mysql = require("../../module/mysql");
mysql.open("8.131.83.251", "root", "123456", "technologieCity");
exports.getConnect = (req, res) => {
  //  let sql = "SELECT * FROM connect";
  let sql = "SELECT * FROM connect";
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
