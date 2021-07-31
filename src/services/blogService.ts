import Blog, { IBlog } from '../models/Blog';
import Comment, { IComment } from '../models/Comment';

class BlogService{

    async getBlogs() : Promise<IBlog[]>{
        var blogs = await Blog.find();   
        return blogs;
    }

    async getBlog(id:string) : Promise<IBlog>{
        var blog = await Blog.findOne({id});   
        if(!blog) throw new Error('Invalid id Provided');
        return blog;
    }

    async getBlogComments(id : string) : Promise<IComment[]>{
        var comments = await Comment.find({ fromId : id});
        return comments;
    }

    async createBlog(message : string) : Promise<void>{
        const newBlog = new Blog({
            post : message,
        });
        await newBlog.save();
    }

    async editBlog(id: string, message : string) : Promise<void>{
        var blog = await Blog.findOne({id});   
        if(!blog) throw new Error('Invalid id Provided');
        await blog.updateOne({post : message});
    }

    async deleteBlog(id:string) : Promise<void>{
        await Blog.deleteOne({id});
    }
}

export default new BlogService;