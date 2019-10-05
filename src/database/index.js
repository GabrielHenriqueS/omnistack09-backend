import mongoose from 'mongoose';

class Database{
  constructor(){
    this.mongo()
  }

  mongo() {
    mongoose.connect('mongodb://localhost:27017/omnistack09',{
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

  }
}

export default new Database();