import mongoose, { Document, Schema } from 'mongoose';

export interface CategoryInterface extends Document {
  name: string;
  description: string;
  blogs:string
}

const categorySchema = new Schema<CategoryInterface>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    blogs: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Blog', // Reference to the Blog model
        },
      ],
     
  },
  {
    timestamps: true,
  }
);

const CategoryModel = mongoose.model<CategoryInterface>('Category', categorySchema);

export default CategoryModel;
