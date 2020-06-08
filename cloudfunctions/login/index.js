// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
// const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  console.log('进入了云函数')
  const db = cloud.database()

  return new Promise((resolve, reject) =>{
    db.collection('teacher_users').where({
      "openId": wxContext.OPENID
    }).get()
    .then(res=> {
      console.log(res);
      if(res.data.length != 0){
        resolve(res)
      } else {
          let newUser = {
            "openId": wxContext.OPENID,
            'telphone': '',
            "nickName": '',
            "level": 0,
            "sex": 0, //0是男，1是女,2是未知
          }
          db.collection('teacher_users').add({
            data: newUser
          }).then(res => {
            db.collection('teacher_users').where({
              "openId": wxContext.OPENID
            }).get().then(res=> {
              resolve(res)
            })
          })
      }
    })
  })
}