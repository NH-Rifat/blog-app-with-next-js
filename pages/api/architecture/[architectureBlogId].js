import {architecture} from '../../../data/data.js';

export default function handler(req,res){
  const {architectureBlogId} = req.query;
  const architectureBlog = architecture.find((item)=>item.id === parseInt(architectureBlogId))

  res.status(200).json(architectureBlog)
}