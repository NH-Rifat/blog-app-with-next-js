import { allBlog } from '../../../data/data';

export default function handler(req, res) {
  if (req.method === 'POST') {
    // console.log(req.body);
    const blogContent = req.body;
    // const newContent = {
    //   id: Date.now(),
    //   text: blogContent,
    // };
    // console.log(blogContent);
    allBlog.push(blogContent);
    res.status(201).json(blogContent);
  }
}
