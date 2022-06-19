import { travel } from '../../../data/data.js';

export default function handler(req, res) {
  const { travelBlogId } = req.query;
  const travelBlog = travel.find((item) => item.id === parseInt(travelBlogId));

  res.status(200).json(travelBlog);
}
