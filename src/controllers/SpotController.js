import User from '../models/User'

class SpotController{
  async store(req,res){
    return res.json({ok : true});
  }
}

export default new SpotController();