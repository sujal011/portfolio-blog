import { model, Schema,models } from "mongoose";

export interface IBlogPost{
    title: string;
    slug: string;
    content: string;
    author?: string;
    date: Date;
    keywords?: string;
    tags?: [String];
    image?: string;
}

const blogSchema = new Schema<IBlogPost>({
    title: { type: String, required: true },
    slug: { type: String, required: true,unique: true },  
    content: { type: String, required: true },
    author: { type: String },
    date: { type: Date, default: Date.now },
    keywords: { type: String, required: true},
    tags: [{ type: String }],
    image: { type: String },
},{
    timestamps: true,
})

const BlogPost=models?.BlogPost || model<IBlogPost>("BlogPost",blogSchema);

export default BlogPost;