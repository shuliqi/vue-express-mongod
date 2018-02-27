var express = require('express');
var Users = require('../modules/users'); //导入模型数据模块
var router = express.Router();
var mongo = require("../mongodb/") //封装mongo的增 删 改查方法
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var DB_URL = "mongodb://localhost:27017/blog";


router.get('/', function(req, res, next) {
    MongoClient.connect(DB_URL, function(error, db) {
        console.log('发布成功!');
        console.log(req.query)
        assert.equal(null, error);
        // mongo.findData(db, req.query, function(data) {
        //     if (data !== []) {
        //         res.send({
        //             success: true


        //         })
        //     } else {
                res.send({

                    success: true

                })
        //     }

        // })
    });



})
module.exports = router;