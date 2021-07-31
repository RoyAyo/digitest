import Comment, {IComment} from '../models/Comment';

class CommentService{

    async getComment(id : string) : Promise<IComment | null>{
        var comment = await Comment.findById(id);
        if(!comment) throw new Error('Invalid Comment Id Provided');
        return comment;

    }

    async getCommentReplies(id : string) : Promise<IComment[]>{
        var comments = await Comment.find({ fromId : id });
        return comments;
    }

    async createComment(id : string, message : string) : Promise<void>{
        const newComment = new Comment({
            comment : message,
            fromId : id
        });
        await newComment.save();
    }

    async updateComment(id: string, message : string) : Promise<void>{
        const comment = await Comment.findById(id);
        if(!comment) throw new Error('Invalid Comment'); 
        await comment.update({comment : message});
    }

    async deleteComment(id:string) : Promise<void>{
        await Comment.deleteOne({id});
    }
}

export default new CommentService;