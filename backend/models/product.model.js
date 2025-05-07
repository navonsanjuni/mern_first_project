import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true

    },
    price:{
        type: Number,
        required: true,
        
    },
    image:{
        type:String,
        required: true
    },
},{
    timestamps: true
});

const Product = mongoose.model('Product', productSchema)
//products is the name of the collection in the database 
export default Product;