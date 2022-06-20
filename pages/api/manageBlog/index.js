import { allBlog } from '../../../data/allBlog';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(allBlog);
  }
}