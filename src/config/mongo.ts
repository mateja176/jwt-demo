import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';

export default {
  type: 'mongodb',
  host: 'localhost',
  database: 'jwt',
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as MongoConnectionOptions;
