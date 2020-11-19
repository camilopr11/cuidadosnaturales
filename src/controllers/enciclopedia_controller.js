import { connect } from '../database/connection'

class enciclopediaController {

    async createInfo(info) {
        try {
            const db = await connect()
            const result = await db.collection('enciclopedias').insertOne(info)
            return result
        } catch (e) {
            return e
        }
    }
    

    async listInfo(){
        const db = await connect()
        const enciclopedia = await db.collection('enciclopedias').find().sort({date: 'desc'});
        return enciclopedia;
    }

    async search(title){
        try{
            const db = await connect()
            const info = title.title;
            console.log('esta es info: ' +info);
            const enciclopedia = await db.collection('enciclopedias').find({"title": {'$regex': info }});
            return enciclopedia;
        }catch(e){
            return e
        }        
    }
}

module.exports = enciclopediaController;