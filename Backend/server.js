require("dotenv").config();  
const app = require("./app");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => { console.log("Connected  to the Database"); })
  .catch(err => console.log("Database connection error:", err));

app.listen(process.env.PORT, () => {
    console.log(`Server run at port ${process.env.PORT}`);
});
