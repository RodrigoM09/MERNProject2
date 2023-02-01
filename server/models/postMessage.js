import mongoose from "mongoose";

// This is the schema that will be used to create the model, it will be used in the model
// The schema is the structure of the document, it will define the fields and their types
// The first argument is the name of the field, the second is the type of the field
// The type can be a string, a number, a date, an array, an object, etc.
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

// This is the model that will be used to create a new post, it will be used in the controller
// The first argument is the name of the model, the second is the schema that will be used to create the model.
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;