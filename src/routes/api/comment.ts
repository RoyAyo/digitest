import express from 'express';
import commentController from '../../controller/commentController';
const router = express.Router();

router.post('/create/:blogId', commentController.createComment);
router.get('/replies', commentController.getCommentReplies);
router.put('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

export default router;