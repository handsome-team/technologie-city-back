const mysql =  require('../../module/mysql')


exports.getdata = (req,res)=>{
    mysql.open('8.131.83.251','root','123456','technologieCity')
    let sql = 'SELECT * FROM `product`'
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
}