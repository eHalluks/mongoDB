const {MongoClient} = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017');

(async() => {

    await client.connect();

    const db = client.db('active_directory');

    await db.createCollection('adUsers');

    const dbTagCollection = db.collection('adUsers');
    const displayAll = db.collection('adUsers').find();

    const users = [
        {
            name: "Jan",
            surname: "Kowalski",
            startDate: new Date('2023-01-01 00:00'),
            computerName: "XXX003-X23",
            departament: "HR",
            costNumber: "0049-W473",
            idCard: "22730000",
        },
        {
            name: "Jenny",
            surname: "Morande",
            startDate: new Date('2022-11-01 00:00'),
            computerName: "DDD001-X13",
            departament: "IT",
            costNumber: "1122-D077",
            idCard: "11730000",
        },
        {
            name: "Julie",
            surname: "Cutoff",
            startDate: new Date('2011-07-01 00:00'),
            computerName: "AAA073-D23",
            departament: "Security",
            costNumber: "0007-A011",
            idCard: "11200000",
        },
    ]

    await dbTagCollection.insertMany(users);

    for await (const user of displayAll){
        console.log(user)
    }

    await client.close();
})();