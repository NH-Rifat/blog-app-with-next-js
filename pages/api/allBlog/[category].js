import {allBlog} from '../../../data/data.js';

export default function handler(req,res){
  const {category} = req.query;
  console.log(category);
  const allCategoriesBlog = allBlog.filter((item)=>item.category === category)

  res.status(200).json(allCategoriesBlog)
}