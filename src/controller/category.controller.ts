import CategoryModel, { CategoryInterface } from "../models/Category.model"

export const Category = {
    get: async () => {
        return CategoryModel.find().populate("blogs");
    },
    post: async (body: CategoryInterface | unknown) => {
        try {
            const newCategory = new CategoryModel(body);
            const savedCategory = await newCategory.save();
            return { message: "Category created successfully;" }
        } catch (error) {
            throw error
        }
    },
}