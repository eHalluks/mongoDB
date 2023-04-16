const {MongoClient} = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017');

(async() => {

    await client.connect();

    const db = client.db('active_directory');

    const dbTagCollection = db.collection('adUsers');

    const displayAll = db.collection('adUsers').find();

    await dbTagCollection.deleteMany({
        costNumber:{
            $eq: "0007-A011"
        }
    })

    for await (const user of displayAll){
        console.log(user);
    }

    await client.close();
})();