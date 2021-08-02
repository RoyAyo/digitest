import express from 'express';
import blogController from '../../controller/blogController';
const router = express.Router();

router.get('/', blogController.getAllBlogs);
router.post('/create', blogController.createBlog);
router.get('/:id', blogController.getBlog);
router.put('/:id', blogController.editBlog);
router.delete('/:id', blogController.deleteBlog);
router.get('/comments', blogController.getBlogComments);

export default router;