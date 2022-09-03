import React from 'react';
import {Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import AddPostForm from "../../components/AddPostForm/AddPostForm";
import {postNews} from "../../store/actions/newsActions";
import Spinner from "../../components/UI/Spinner/Spinner";

const AddPost = ({history}) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.newsData.loading);

  const onSendPost = async postData => {
    await dispatch(postNews(postData));
    history.push("/");
  };

  return (
    <Container>
      <Typography variant="h3" textAlign="center">
        Add new post
      </Typography>
      {loading ? <Spinner/> : <AddPostForm onSendPost={onSendPost}/>}
    </Container>
  );
};

export default AddPost;