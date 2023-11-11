import mongoose, { Document, Schema, Types } from 'mongoose';
import CategoryModel, { CategoryInterface } from './Category.model';

export interface BlogInterface extends Document {
  title: string;
  subtitle: string;
  description: string;
  shortDescription:string
  coverImage: string;
  category: Types.ObjectId | CategoryInterface;
}

const blogSchema = new Schema<BlogInterface>(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    shortDescription:{
        type: String,
        required: true,
    },
    description: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category', // Reference to the Category model
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const BlogModel = mongoose.model<BlogInterface>('Blog', blogSchema);

export default BlogModel;
