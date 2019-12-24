const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, err => {
  if (!err) {
    console.log("MongoDB connections succedded");
  } else {
    console.log(
      "Error in MongoDB connection: " + JSON.stringify(err, undefind, 2)
    );
  }
});

require("./userModel");
