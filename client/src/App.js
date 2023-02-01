import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from "./images/memories.png";
import useStyles from "./styles";


// App is the main component that will be rendered in the index.js file
// It will render the Posts and Form components, which are imported above.
// The Posts component will render the Post component, which is also imported above.
// The Form component will render the FileBase component, which is imported in the Form.js file.
const App = () => {
    const classes = useStyles();
  return(
      <Container maxWidth="lg">
          <AppBar className={classes.appBar} position="static" color="inherit">
              <Typography variant="h2" align="center">Memories</Typography>
              <img src={memories} alt="memories" height="auto" />
          </AppBar>
          <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
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