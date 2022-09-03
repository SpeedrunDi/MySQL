import React, {useEffect} from 'react';
import {Button, Container, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteNews, getNews} from "../../store/actions/newsActions";
import Post from "../../components/Post/Post";
import Spinner from "../../components/UI/Spinner/Spinner";

const News = () => {
  const dispatch = useDispatch();
  const news = useSelector(state => state.newsData.news);
  const loading = useSelector(state => state.newsData.loading);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

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
        {loading ? <Spinner/> : (
          <Grid item width="100%">
            {
              news ?
              news.map(post => (
                <Post key={post.id} post={post} onDeletePost={onDeletePost}/>
              )) : <Typography>No news!</Typography>
            }
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default News;