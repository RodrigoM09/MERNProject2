import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from "./images/memories.png";
import useStyles from "./styles";

// App is the main component that will be rendered in the index.js file
// It will render the Posts and Form components, which are imported above.
// The Posts component will render the Post component, which is also imported above.
// The Form component will render the FileBase component, which is imported in the Form.js file.
const App = () => {

    //this is a hook that allows us to use the styles defined in the styles.js file
    const classes = useStyles();
    //this is a hook that allows us to dispatch actions to the store
    const dispatch = useDispatch();

    //this is a hook that will dispatch the getPosts action when the component is rendered
    //the getPosts action will make a request to the server to get all the posts
    // will be stored in the store, and the Posts component will render them
    //the Posts component will render the Post component, which will render the individual posts.
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

  return(
      <Container maxWidth="lg">
          <AppBar className={classes.appBar} position="static" color="inherit">
              <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
              <img className={classes.image} src={memories} alt="memories" height="60" />
          </AppBar>
          <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>

                </Grid>
            </Container>
          </Grow>
      </Container>
    );
}

export default App;