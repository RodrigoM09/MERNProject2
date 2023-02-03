import express from "express";

import { getPosts, createPosts, updatePost, deletePost } from "../controllers/posts.js";

const router = express.Router();

// This is the route that will be used to get all the posts, it will be called from the client.
// The first argument is the route, the second is the controller that will handle the logic of the route
router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
// router.patch("/:id/likePost", likePost);


export default router;