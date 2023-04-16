const {MongoClient} = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017');

(async() => {

    await client.connect();

    const db = client.db('active_directory');

    const dbTagCollection = db.collection('adComputers');
    const displayAll = db.collection('adComputers').find();

    await dbTagCollection.updateMany({}, {
        $unset:{
            type: '',
        },
        $set: {
            warranty: new Date('2028-01-01'),
            isActive: true,
        },
    })
    console.log("")
    for await(const computer of displayAll){
        console.log(computer)
    }
    console.log("")
    await client.close();
})();