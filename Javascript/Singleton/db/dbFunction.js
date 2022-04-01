const mongoose = require('mongoose');

const DB_ENDPOINT =
  'mongodb+srv://dandeng:TestMongoDb6367@cluster0.nu9xs.mongodb.net/reddit?retryWrites=true&w=majority';

/**
 * Implemented a DB connection using a factory function
 */

function database() {
  let instance;
  let count = 0;

  async function connect() {
    const db = await mongoose.connect(DB_ENDPOINT);
    console.log('connected to DB');
    return db;
  }

  async function getInstance() {
    console.log('get instance count: ' + count);
    count++;
    if (instance) {
      return instance;
    }
    console.log('No instance, creating a new instance');
    instance = await connect();
    return instance;
  }
  return {
    getInstance,
    count,
  };
}

///test of creating the database connection using database function

const db = database();

async function run() {
  await db.getInstance();
  await db.getInstance();
  await db.getInstance();
  await db.getInstance();
  await db.getInstance();
  await db.getInstance();
}

run();
