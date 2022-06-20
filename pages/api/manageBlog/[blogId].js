import { allBlog } from '../../../data/data';

export default function handler(req, res) {
  const { blogId } = req.query;

  if (req.method === 'DELETE') {
    const index = allBlog.findIndex(
      (blog) => blog.id === parseInt(blogId)
    );
    allBlog.splice(index, 1);
    res.status(200).json(allBlog);
  }
}
