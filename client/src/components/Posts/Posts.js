import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post/Post";

// import useStyles from "../Form/styles";

//this component will render the Post component, which will render the individual posts.
//the Posts component will render the Post component, which will render the individual posts.
const Posts = () => {
    //this is a hook that allows us to access the posts in the store, which will be rendered by the Post component
    const posts = useSelector((state) => state.posts);
    // const classes = useStyles();

    console.log(posts);

    return (
        <>
        <h1>Form</h1>
        <Post />
        <Post />
        </>
    );
}

export default Posts;