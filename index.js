import express from "express";
import route from "./routes/loginRoutes.js";
import connectDb from "./databse/connectDb.js";
import insertProductData from "./databse/schemas/ProductSchema.js";

const app = express();
const port = process.env.PORT || 3000;

//calling connection function to database
connectDb();
// using router
app.use("/", route);

// creating server
app.listen(port, () => {
  console.log(`server strted on http://localhost:${port}`);
});

// calling function to insert product data in database.
insertProductData();
