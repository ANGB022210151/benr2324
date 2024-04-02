const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/', (req, res) => {
   res.send('Hello world')
})



app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})


const { MongoClient, ServerApiVersion, ObjectId} = require('mongodb');
const uri = "mongodb+srv://thunderblitz18:emtbestwaifu@cluster0.ki0j8rb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    //await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    /*let result = await client.db('benr2423').collection('collection').updateOne( //update data in mongodb
      {
        subject: 'not database'
      
        
        
      
      },
      {$set:{
        subject: 'yes database',
        description: 'i love mcd',

      }
    }
    )*/

    /*let result = await client.db('benr2423').collection('collection').insertOne( //insert new data in mongodb
      {
        subject: "database i wanna destroy this",
        description: 'delete me pls',
        
        
      
      }
      
    
    )*/

    let deleted = await client.db('benr2423').collection('collection').deleteOne( //delete data in mongodb
      {
        
        _id: new ObjectId('660b6aeb14ee968f5121f356'),
        
      
      }
      
    
    )

    

    let collection = await client.db('benr2423').collection('collection').find().toArray() //find() is like a search function it returns everything
    console.log(collection); //can actually find specifically using findOne()
    console.log("nice")
    
  

  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);



