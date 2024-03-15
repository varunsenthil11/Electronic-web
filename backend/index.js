const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User = require('./db');


app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://127.0.0.1:27017/Electronic_web', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log("Error connecting to MongoDB:", e);
  });

app.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const existingUser = await User.findOne({ email, name });
console.log(message);
    if (existingUser) {
      await User.updateOne(
        { _id: existingUser._id },
        { $push: { message: message } }
      );
      console.log("Data updated successfully");
    } else {
      await User.create({name:name,email:email,message:message});
      console.log("Data saved successfully");
    }

    console.log(req.body);
    res.send('<div><p>Operation completed successfully</p></div>');
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send('<div><p>Error occurred</p></div>');
  }
});

app.get('/', (req, res) => {
  res.send('<div><p>Hello World</p></div>');
});

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});
