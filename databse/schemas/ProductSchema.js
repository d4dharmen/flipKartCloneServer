import  { products }  from "../constants/productConstantData.js";
import mongoose from "mongoose";

//creating schemas
const ProductSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
})
 
//compiling model and creating collection named product
const productCollection = mongoose.model('product', ProductSchema);


// defining Function for inserting default product data one time
const insertProductData = async()=>{
    try {
       await productCollection.insertMany(products)
       console.log('product data inserted successfully');
    } catch (error) {
        console.log('error while insertin product data', error.message);
    }
   
}

export default insertProductData;
