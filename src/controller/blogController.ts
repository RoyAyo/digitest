import { Request, Response } from "express";

import BlogService from "../services/blogService";
import {succesRes, catchError} from '../helpers/response/apiResponse';


class BlogController{

    async getAllBlogs(req : Request , res : Response){
        try {
            const blogs = await BlogService.getBlogs();
            succesRes('', res, {blogs});
        } catch (error : any) {
            catchError(error?.message, res, 422);
        }
    }

    async getBlog(req : Request , res : Response){
        try {
            const id : string = req.params.id;
            const blog = await BlogService.getBlog(id);
            succesRes('', res, {blog});

        } catch (error : any) {
            catchError(error?.message, res, 422);;     
        }
    }

    async getBlogComments(req : Request , res : Response){
        try {
            const id : string = req.params.id;
            const comments = await BlogService.getBlogComments(id);
            succesRes('', res, {comments});
        } catch (error : any) {
            catchError(error?.message, res, 422);;
        }
    }

    async createBlog(req : Request , res : Response){
        try {
            if((req.body.message === undefined) || (req.body.message.length < 3)){
                return catchError('message is required', res, 400);
            }
            const blog = await BlogService.createBlog(req.body.message);
            succesRes('Blog created successfully', res, {blog});
        } catch (error : any) {
            catchError(error?.message, res, 422);;     
        }
    }

    async editBlog(req : Request , res : Response){
        try {
            const id : string = req.params.id;
            if((req.body.message === undefined) || (req.body.message.length < 3)){
                return catchError('message is required', res, 400);
            }
            const blog = await BlogService.editBlog(id, req.body.message);
            succesRes('Blog edited successfully', res, {blog});
        } catch (error : any) {
            catchError(error?.message, res, 422);;     
        }
    }

    async deleteBlog(req : Request , res : Response){
        try {
            const id : string = req.params.id;
            const blog = await BlogService.deleteBlog(id);
            succesRes('Blog deleted successfully', res, {blog});
        } catch (error : any) {
            catchError(error?.message, res, 422);;     
        }
    }
}

export default new BlogController;