const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const bcrypt = require('bcrypt')

app.use(express.json())


app.get('/hello', (req, res) => { 
   res.send('get')


})

//new user registeration 
app.post('/user/register', async (req, res) => { // when someone is going to register, someone is going to send a request
  //check if username already exists

  let existing = await client.db('benr2423').collection('collection').findOne({ //findOne is a function that finds one data in the database
    username: req.body.username //check if the username already exists
  })

  if (existing) { //if the username already exists
    res.status(400).send('username already exists') //send back a response to the user
    
  }

  else { //if the username does not exist 

  //insertOne the regissteration data to mongo
  //console.log(req.body) //print out body of request, 

  const hash = bcrypt.hashSync(req.body.password, 10) //hash the password (10 means 10 round hashing)

  let result = await client.db('benr2423').collection('collection').insertOne({ //insert data into the database

    username: req.body.username,
    password: hash,
    email: req.body.email,
    name: req.body.name,

  }) //insertOne is a function that inserts data into the database
  res.send(result) //send back the result to the user

}
})

//eg




//user login api
app.post('/login', async (req, res) => {

    //step #1 check if the user (username/email) exists in the database
   let result= await client.db('benr2423').collection('collection').findOne({ //findOne is a function that finds one data in the database
    
      username: req.body.username 
    
    
    })

    if(result){ //result/user exists
    //step #2 check if the password is correct


    if (bcrypt.compareSync(req.body.password, result.password) == true){ //compare the password with the hashed password in the database
      res.send('login successful') 
    }

    else { //password is incorrect
      res.status(401).send('password incorrect')
    }
  }
    else { //not found

      res.send('user not found')
    }




    //step #3 generate a token and send it back to the user

})

//update user info
app.patch('/user', async (req, res) => {

})

// app.get('/user', async (req, res) => { 

//   let collection = await client.db('benr2423').collection('collection').find().toArray() //find() is like a search function it returns everything

//   res.send(collection);


// })

// app.post('/hello', (req, res) => {  
//   res.status(400).send('post world')
// })

app.get('/', (req, res) => {  // got two website one is localhost:3000 and localhost:3000/hello
  res.send('HIIIIIIIIIIIII')
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



    // let deleted = await client.db('benr2423').collection('collection').deleteOne( //delete data in mongodb
    //   {
        
    //     _id: new ObjectId('660b6aeb14ee968f5121f356'),
        
      
    //   }
      
    
    // )

    

    // let collection = await client.db('benr2423').collection('collection').find().toArray() //find() is like a search function it returns everything
    // console.log(collection); //can actually find specifically using findOne()
    // console.log("nice")
    
  

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



