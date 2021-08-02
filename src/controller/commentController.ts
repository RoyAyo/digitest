import { Request, Response } from "express";

import {succesRes, catchError} from '../helpers/response/apiResponse';
import commentService from "../services/commentService";

class CommentController{

    async getCommentReplies(req : Request , res : Response){
        try {
            const commentId : string = req.params.commentId;
            const CommentReplies = await commentService.getCommentReplies(commentId);
            succesRes('', res, {comments : CommentReplies});
        } catch (error : any) {
            catchError(error?.message, res, 422);;     
        }
    }

    async createComment(req : Request , res : Response){
        try {
            const id = req.params.blogId; 
            if((req.body.message === undefined) || (req.body.message.length < 3)){
                return catchError('message is required', res, 400);
            }
            const blog = await commentService.createComment(id,req.body.message);
            succesRes('Comment created successfully', res, {blog});
        } catch (error : any) {
            catchError(error?.message, res, 422);;     
        }
    }

    async updateComment(req : Request , res : Response){
        try {
            await commentService.updateComment(req.params.id, req.body.comment);
            succesRes('Comment updated successfully', res, {});
        } catch (error : any) {
            catchError(error?.message, res, 422);
  
        }
    }

    async deleteComment(req : Request , res : Response){
        try {   
            await commentService.deleteComment(req.params.id);
            succesRes('Comment deleted successfully',res, null);
        } catch (error : any) {
            catchError(error?.message, res, 422);

        }
    }
}

export default new CommentController;