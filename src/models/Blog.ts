import mongoose, { Schema, Document } from 'mongoose';

export interface IBlog extends Document {
  post: string
}

const BlogSchema = new Schema({
    post : String,
  },
  {
    timestamps: true,
  }
);

// Export the model and return your IBlog interface
export default mongoose.model<IBlog>('Blogs', BlogSchema);