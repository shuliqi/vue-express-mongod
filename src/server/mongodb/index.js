var assert = require('assert');

var mongo = function() {}
    //插入数据
mongo.prototype.insertData = function(db) {
    var devices = db.collection('user');
    var data = { "name": "12312", pass: "2599" };
    devices.insert(data, function(error, result) {
        if (errbor) {
            console.log('Error:' + error);
        } else {

            console.log(result.result.n);
        }
        db.close();
    });
}
mongo.prototype.findData = function(db, data, callback) {
    // Get the documents collection
    var collection = db.collection('user');
    // Find some documents
    collection.find(data).toArray(function(err, docs) {
        assert.equal(err, null);
        callback(docs);
    });
}

module.exports = new mongo();