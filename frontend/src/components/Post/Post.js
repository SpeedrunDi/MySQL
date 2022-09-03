import React from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {serverApi} from "../../config";

const Post = ({post, onDeletePost}) => {
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
          src={post.image ? serverApi + '/uploads/' + post.image : null} alt=""
          style={{width: "60px", height: "60px", display: "block", margin: "0 auto"}}
        />
      </Grid>
      <Grid item width="85%">
        <Box>
          <Typography whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
            {post.title}
          </Typography>
        </Box>
        <Grid container alignItems="center">
          <Grid item marginRight="40px">
            <Typography variant="span">
              {post.datetime}
            </Typography>
          </Grid>
          <Grid item width="60%" sx={{display: "flex", justifyContent: "space-between"}}>
            <Button to={'/news/' + post.id} component={Link}>Read full post</Button>
            <Button onClick={() => onDeletePost(post.id)}>Delete</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Post;