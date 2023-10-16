const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

router.get('/', async (req, res) =>{
    const userDet = await loadUserCollection();
    res.send(await userDet.find({}).toArray());
})

router.post('/', async (req, res)=>{
    const userDet = await loadUserCollection();
    await userDet.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

async function loadUserCollection(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://brian:1234@cluster0.bkbs5ip.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
    return client.db('vue-project').collection('vue');
}

module.exports = router; 