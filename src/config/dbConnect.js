import mongoose from 'mongoose';


  const dbConnect= async ()=>{
      try{
    
        const connect=await  mongoose.connect(`${process.env.MONGODB}`)
            console.log('Connected to MongoDB');
      }catch(err){
          console.error('MongoDB   connection error:', err);
  }
  }
  export default dbConnect;