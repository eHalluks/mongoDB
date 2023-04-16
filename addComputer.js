const {MongoClient} = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017');

(async() => {

    await client.connect();

    const db = client.db('active_directory');

    await db.createCollection('adComputers');

    const dbTagCollection = db.collection('adComputers');
    const displayAll = db.collection('adComputers').find();

    const computers = [
        {
            computerName: "XXX003-X23",
            type: "notebook",
            warranty: new Date('2029-01-01 00:00')

        },
        {
            computerName: "DDD001-X13",
            type: "notebook",
            warranty: new Date('2025-01-01 00:00')
        },
        {
            computerName: "AAA073-D23",
            type: "desktop",
            warranty: new Date('2027-01-01 00:00')
        }
    ]

    await dbTagCollection.insertMany(computers);

    for await (const device of displayAll){
        console.log(device)
    }

    await client.close();
})();