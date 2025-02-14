import models from '../models/index.js';
import db from '../config/connection.js';
export default async (modelName, collectionName) => {
    try {
        // let modelExists = await models[modelName].db.db.listCollections({
        const model = models[modelName];
        if (model && model.db && model.db.db) {
            let modelExists = await model.db.db.listCollections({
                name: collectionName
            }).toArray();
            if (modelExists.length) {
                await db.dropCollection(collectionName);
            }
        }
        else {
            throw new Error(`Model "${modelName}" does not exist.`);
        }
    }
    catch (err) {
        throw err;
    }
};
