import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

    const MONGODDB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-sgeunpo-shard-00-00.mohxfnn.mongodb.net:27017,ac-sgeunpo-shard-00-01.mohxfnn.mongodb.net:27017,ac-sgeunpo-shard-00-02.mohxfnn.mongodb.net:27017/?ssl=true&replicaSet=atlas-b180k1-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(MONGODDB_URI, { useNewUrlParser: true});
        console.log('Database Connected Successufully');
    }catch (error) {
        console.error('Error while connecting with the database', error.message);
    }
}

export default DBConnection