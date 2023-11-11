import BlogModel, { BlogInterface } from "../models/Blog.model";
import CategoryModel from "../models/Category.model"

export const Blog = {
    get: async () => {
        return BlogModel.find().populate('category')
    },
    post: async (body: BlogInterface | unknown) => {
        try {
            const newBlogPost = new BlogModel(body);
            const savedBlogPost = await newBlogPost.save();
            return { message: "Category created successfully;" }
        } catch (error) {
            throw error
        }
    },
}