import React, {useEffect} from 'react';
import {Button, Container, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Post from "../../components/Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "../../store/actions/newsActions";

const News = () => {
  const dispatch = useDispatch();
  const news = useSelector(state => state.newsData.news);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <Container>
      <Grid container>
        <Grid container justifyContent="space-between" alignItems="center" marginBottom="20px">
          <Grid item>
            <Typography variant="h3">
              Posts
            </Typography>
          </Grid>
          <Grid item>
            <Button to="new" component={Link} variant="outlined">Add new post</Button>
          </Grid>
        </Grid>
        <Grid item width="100%">
          {
            news &&
            news.map(post => (
              <Post key={post.id} post={post}/>
            ))
          }
        </Grid>
      </Grid>
    </Container>
  );
};

export default News;