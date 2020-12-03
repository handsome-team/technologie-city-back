const mysql = require('../../module/mysql.js')

mysql.open("8.131.83.251", "root", "123456", "technologieCity");

exports.takeMessage = (req,res) => {
    const { name, workplace, sendEmail, contact, qq, message } = req.body.params;
    let sql = 'INSERT into message set ? ';
    let data_add = {
        name,
        workplace,
        sendEmail,
        contact,
        message,
        qq
    }
    mysql.handleData(sql,data_add,(result) => {
        res.json({
            code:200,
            message:"留言成功"
        })
    },(err) => {
        console.log(err)
    })
    mysql.close()
}