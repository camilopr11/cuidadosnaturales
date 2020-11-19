import { connect } from '../database/connection'

class enciclopediaController {

    static async createInfo(info) {
        try {
            const db = await connect()
            const result = await db.collection('enciclopedia').insertOne(info)
            return result
        } catch (e) {
            return e
        }
    }
    

    static async listInfo(){
        const db = await connect()
        const enciclopedia = await db.collection('enciclopedia').find().sort({date: 'desc'});
        return enciclopedia;
    }

    static async search(title){
        try{
            const db = await connect()
            const info = title.title;
            console.log('esta es info: ' +info);
            const enciclopedia = await db.collection('enciclopedia').find({"title": {'$regex': info }});
            return enciclopedia;
        }catch(e){
            return e
        }        
    }
}

module.exports = enciclopediaController;