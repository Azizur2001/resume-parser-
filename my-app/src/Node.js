const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

const fileUpload = (req, res) => {
  const file = req.files.file;
  const reader = new FileReader();
  reader.onload = async () => {
    const fileContents = reader.result;
    try {
      // Connect to the database
      await client.connect();
      
      // Get a reference to the collection where you want to save the parsed resume data
      const collection = client.db("test").collection("resumes");
      
      // Create a new document with the parsed resume data
      const resume = { contents: fileContents };
      
      // Save the document to the collection
      await collection.insertOne(resume);
      
      // Close the connection to the collection and the database
      await client.close();
      
      res.status(200).send('File uploaded successfully');
    } catch (error) {
      res.status(500).send('Error uploading file');
    }
  };
  reader.readAsText(file);
};
