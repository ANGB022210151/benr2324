
const express = require('express');
const app = express();
const port = 3000;
const bcrypt = require('bcrypt');

app.use(express.json());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://thunderblitz18:emtbestwaifu@cluster0.ki0j8rb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

console.log('successfully connected to MONGODB');

app.post('/register', async (req, res) => {

let existed = await client.db('RHb').collection('data').findOne({username: req.body.username});

if (existed) {res.status(401).send('Username already exists!')}

else {

    const hash = bcrypt.hashSync(req.body.password, 10)

    let result = await client.db('RHb').collection('data').insertOne({

        username: req.body.username,
        password: hash,
        
    })

    res.status(200).send("User registered successfully!");

}
})

app.post('/login', async (req, res) => {

    let result = await client.db('RHb').collection('data').findOne({username: req.body.username});

    if (result){

        if (bcrypt.compareSync(req.body.password, result.password)==true){

            res.status(200).send('Login successful!');

        }

        else {

            res.status(401).send('Invalid username or password!');

        }

    }

    else {

        res.status(401).send('Invalid username or password!');}



})



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
