var express = require('express');
var mongoose = require('mongoose'); //导入mongoose模块

var Users = require('../modules/users'); //导入模型数据模块
var router = express.Router();

//查询所有用户数据
router.get('/', function(req, res, next) {
    // }
    console.log("+++++++++++++++++++++++++++++++++++++++")
    var my = new Users({ name: 'Silence', paw: "123456" })
    console.log(my)
    console.log("+++++++++++++++++++++++++++++++++++++++")
    res.send(my) //这里也可以json的格式直接返回数据res.json({data: users});
        // })
})
module.exports = router;

// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('users', { title: '用户列表', users: "shhd" });
// });

// module.exports = router;