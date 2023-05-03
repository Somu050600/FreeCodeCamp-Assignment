const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://somu123:Somu%40143@cluster1.zlcent9.mongodb.net/test';
const dbName = 'CollectionDB';

const client = new MongoClient(url, { useNewUrlParser: true });

let db;

function connect(callback) {
  client.connect(function(err) {
    if (err) {
      console.error('Error connecting to MongoDB', err);
      return;
    }

    console.log('Connected to MongoDB');

    db = client.db(dbName);

    callback();
  });
}

function getDb() {
  return db;
}

module.exports = {
  connect,
  getDb,
};
