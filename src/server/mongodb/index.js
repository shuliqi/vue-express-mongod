var assert = require('assert');

var mongo = function() {}
    //插入数据
mongo.prototype.insertData = function (db, data,sql,callback) {
    var devices = db.collection(sql);
   console.log(data)
    devices.insert(data, function(error, result) {
        if (error) {
            console.log('Error:' + error);
        } else {
            console.log("发布成功")
        }
        db.close();
    });
}
mongo.prototype.findData = function(db, data,sql, callback) {
    // Get the documents collection
    var collection = db.collection(sql);
    // Find some documents
    collection.find(data).toArray(function(err, docs) {
        assert.equal(err, null);
        callback(docs);
    });
}

module.exports = new mongo();