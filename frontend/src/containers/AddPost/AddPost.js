import React from 'react';
import {Container, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import AddPostForm from "../../components/AddPostForm/AddPostForm";
import {postNews} from "../../store/actions/newsActions";

const AddPost = ({history}) => {
  const dispatch = useDispatch();

  const onSendPost = async postData => {
    await dispatch(postNews(postData));
    history.push("/");
  };

  return (
    <Container>
      <Typography variant="h3" textAlign="center">
        Add new post
      </Typography>
      <AddPostForm onSendPost={onSendPost}/>
    </Container>
  );
};

export default AddPost;