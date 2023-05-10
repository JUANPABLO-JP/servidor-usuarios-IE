const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://JUAN_789:JuanPablo789@cluster0.metxlyb.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((data) => console.log("DB is conected"))
  .then((err) => console.log(err));
