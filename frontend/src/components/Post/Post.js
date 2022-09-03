import React from 'react';
import {Box, Button, Grid} from "@mui/material";
import {Link} from "react-router-dom";

const Post = ({post}) => {
  return (
    <Grid
      container
      alignItems="center"
      padding="15px 20px"
      width="80%"
      margin="0 auto 20px"
      border="3px solid black"
    >
      <Grid item width="15%">
        <img
          src={post ? post.image : null} alt=""
          style={{width: "60px", height: "60px", display: "block", margin: "0 auto"}}
        />
      </Grid>
      <Grid item width="85%">
        <Box>
          {post.title}
        </Box>
        <Grid container alignItems="center">
          <Grid item marginRight="40px">
            {post.datetime}
          </Grid>
          <Grid item width="60%" sx={{display: "flex", justifyContent: "space-between"}}>
            <Button to={'/news/' + post.id} component={Link}>Read full post</Button>
            <Button sx={{marginLeft: "auto"}}>Delete</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Post;