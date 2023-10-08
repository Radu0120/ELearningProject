const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

let _db

const mongoConnect = callback => {
    MongoClient.connect('mongodb+srv://Shumik:MFViAMHfhFRuvAoK@cluster0.41qchvj.mongodb.net/')
.then(client => {
    console.log('Connected')
    _db = client.db('mongo')
    callback()
})
.catch(err => {
    console.log(err)
    throw err
})
}

const getDb = () => {
    if(_db){
        return _db
    }
    throw 'No database found'
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb