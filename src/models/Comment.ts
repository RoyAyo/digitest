import mongoose, { Schema, Document } from 'mongoose';

export interface IComment extends Document {
  post: string
  fromId : string
}

const CommentSchema = new Schema(
    post : {
      type: String
    },

    fromId : String

  },
  {
    timestamps: true,
  }
);

// Export the model and return your IComment interface
export default mongoose.model<IComment>('Comments', CommentSchema);