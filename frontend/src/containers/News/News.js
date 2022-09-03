import React, {useEffect} from 'react';
import {Button, Container, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Post from "../../components/Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {deleteNews, getNews} from "../../store/actions/newsActions";

const News = () => {
  const dispatch = useDispatch();
  const news = useSelector(state => state.newsData.news);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  const onDeletePost = async id => {
    await dispatch(deleteNews(id));
    dispatch(getNews());
  };

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
            <Button to="/new-post" component={Link} variant="outlined">Add new post</Button>
          </Grid>
        </Grid>
        <Grid item width="100%">
          {
            news &&
            news.map(post => (
              <Post key={post.id} post={post} onDeletePost={onDeletePost}/>
            ))
          }
        </Grid>
      </Grid>
    </Container>
  );
};

export default News;