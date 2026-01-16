import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema(
  {
    title: String,
    slug: { type: String, unique: true },
    content: String,
    authorId: String,
  },
  { timestamps: true }
);

export default models.Blog || model("Blog", BlogSchema);
