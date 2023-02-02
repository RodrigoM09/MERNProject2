import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

// This is the controller for the posts route, it will be used to handle the logic of the route
export const getPosts = async (req, res) => {
    try {
        // This is the model that will be used to get all the posts from the database
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// This is the controller for the posts route, it will be used to handle the logic of the route
// This controller will be used to create a new post, it will be called from the client
// The first argument is the request, the second is the response, the third is the next function
export const createPosts = async (req, res) => {

    // This is the body of the request, it will contain the data of the new post
    // The data will be sent from the client, it will be sent in the body of the request, it will be sent as JSON
    const post = req.body;

    // This is the model that will be used to create a new post
    const newPost = new PostMessage(post);

    try {
        // This is the model that will be used to save the new post in the database
        await newPost.save();
        res.status(201).json(newPost);
        } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// This is the controller for the posts route, it will be used to handle the logic of the route
// This controller will be used to delete a post, it will be called from the client
// The first argument is the request, the second is the response, the third is the next function
// The id of the post that will be deleted will be sent in the params of the request
// The id will be sent from the client, it will be sent in the params of the request, it will be sent as JSON
export const updatePost = async (req, res) => {
        const { id: _id } = req.params;
        const post = req.body;

        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

        const updatedPost = await PostMessage.findById(_id, post, {new: true});

        res.json(updatedPost);
}