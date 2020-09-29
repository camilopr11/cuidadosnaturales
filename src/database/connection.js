import MongoClient from 'mongodb'

// Connection parameters for the database
// TODO: Move this sensitive info to a dotenv file
const uri = 'mongodb://localhost:27017/'
const dbName = 'garden'

/**
 * Creates a asyncronous connection to Mongo database
 * Assigns a name to the database
 * @returns The estabilished connection to de database 
 */

export async function connect() {
    try {
        const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = client.db(dbName)
        if (db) {
            console.log("That's a bingo!")
        }
        return db
    } catch (e) {
        console.log("Error:", e)
    }

}
