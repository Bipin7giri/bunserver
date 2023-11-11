import { Elysia } from "elysia";
import { Category } from "./controller/category.controller";
import { connectMongoDB } from "./database/connection";
import CategoryModel from "./models/Category.model";
import { Blog } from "./controller/blog.controller";

let app = new Elysia()
connectMongoDB()
app.get("/", () => "Hello Elysia")
app.get("/category", Category.get);
app.post("/category", ({ body, set }) => {
  try {
    set.status = 201
    return Category.post(body)

  } catch (error) {
    return set.status = 500
  }
}
);
app.get("/blog", Blog.get);

app.post("/blog", ({ body, set }) => {
  try {
    set.status = 201
    return Blog.post(body)
  } catch (error) {
    return set.status = 500
  }
}
);
app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
