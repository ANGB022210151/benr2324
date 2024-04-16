const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// const { MongoClient, ServerApiVersion, ObjectId} = require('mongodb');
// const uri = "mongodb+srv://thunderblitz18:emtbestwaifu@cluster0.ki0j8rb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     //await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");

//     /*let result = await client.db('RHb').collection('data').updateOne( //update data in mongodb
//       {
//         subject: 'not database'
      
        
        
      
//       },
//       {$set:{
//         subject: 'yes database',
//         description: 'i love mcd',

//       }
//     }
//     )*/



//     // let deleted = await client.db('RHb').collection('data').deleteOne( //delete data in mongodb
//     //   {
        
//     //     _id: new ObjectId('660b6aeb14ee968f5121f356'),
        
      
//     //   }
      
    
//     // )

//     let result = await client.db('RHb').collection('data').insertOne({
//       username: 'thunderblitz18',
//       password: 'emtbestwaifu',
//     });

//     let collection = await client.db('RHb').collection('data').find().toArray() //find() is like a search function it returns everything
//     console.log(collection); //can actually find specifically using findOne()
//     console.log("nice")
    
  

//   } finally {
//     // Ensures that the client will close when you finish/error
//     //await client.close();
//   }
// }
// run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Database is hard');
});

app.post('/register', (req, res) => {
    let result=
{
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
}
    
console.log(req.body);
    res.send(result); 
   // res.send(req.body)
    });

app.listen(port, () => {    
  console.log(`server listening at http://localhost:${port}`);
});