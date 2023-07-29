import mongoose from "mongoose";
const connect=async()=>{
  (await mongoose.connect(process.env.MONGODB_URI)).then(()=>{
    console.log(`Connection to Database established successfully`);
  }).catch((err)=>{
    console.log(`Connection to database failed due to ${err}`);
  })
}
export default connect;