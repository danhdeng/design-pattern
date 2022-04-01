const mongoose = require('mongoose');

const DB_ENDPOINT =
  'mongodb+srv://dandeng:TestMongoDb6367@cluster0.nu9xs.mongodb.net/reddit?retryWrites=true&w=majority';

/**
 * Implemented a DB connection using a class-based-singleton
 */

class Database {
  static instance;
  static count;

  constructor() {
    mongoose.connect(DB_ENDPOINT).then(() => {
      console.log('Connect to MongoDB at', 'cluster0.nu9xs.mongodb.net');
    });
  }

  static getInstance() {
    if (this.instance) {
      console.log('returning the db instance');
      return this.instance;
    }

    console.log('creating a new db instance');
    this.instance = new Database();
    this.count = this.count + 1;

    return this.instance;
  }
}

/// test the database class

const db = Database.getInstance();
Database.getInstance();
Database.getInstance();
Database.getInstance();
Database.getInstance();
Database.getInstance();
