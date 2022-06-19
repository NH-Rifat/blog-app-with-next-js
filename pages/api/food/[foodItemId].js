import {food} from '../../../data/data.js';

export default function handler(req,res){
  const {foodItemId} = req.query;
  const foodItem = food.find((item)=>item.id === parseInt(foodItemId))

  res.status(200).json(foodItem)
}