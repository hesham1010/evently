import mongoose from "mongoose";
const MONGO_URL=
let cached = (global as any).mongoose || {conn:null,promise:null}
export const connectToDatabase=async()=>{
    if(cached.conn) return cached.connect;

} 