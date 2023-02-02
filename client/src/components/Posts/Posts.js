import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

import Post from "./Post/Post";
import useStyles from "./styles";

//this component will render the Post component, which will render the individual posts.
//the Posts component will render the Post component, which will render the individual posts.
const Posts = ({ setCurrentId }) => {
    //this is a hook that allows us to access the posts in the store, which will be rendered by the Post component
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);

    return (
       !posts.length ? <CircularProgress/> : (
           <Grid className={classes.container} container alignItems={"stretch"} spacing={3}>
               {posts.map((post) => (
                   <Grid key={post._id} item xs={12} sm={6}>
                          <Post post={post} setCurrentId={setCurrentId}/>
                     </Grid>
               ))}
           </Grid>
    ));
}

export default Posts;