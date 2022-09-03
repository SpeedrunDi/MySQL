import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";

const AddPostForm = ({onSendPost}) => {
  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    image: ""
  });

  const onChangeMessage = e => {
    const {name, value} = e.target;

    setNewPost(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onChangeFile = e => {
    const name = e.target.name;
    const file = e.target.files[0];

    setNewPost(prev => ({
      ...prev,
      [name]: file
    }));
  };

  const createPost = () => {
    const formData = new FormData();

    Object.keys(newPost).forEach(key => {
      formData.append(key, newPost[key]);
    });

    onSendPost(formData);
  };

  return (
    <Box padding="20px" maxWidth="720px" margin="0 auto">
      <Box marginBottom="30px">
        <TextField name="title" label="Title" variant="outlined" fullWidth onChange={onChangeMessage}/>
      </Box>
      <Box marginBottom="30px">
        <TextField name="description" label="description" variant="outlined" fullWidth onChange={onChangeMessage}/>
      </Box>
      <Box marginBottom="30px">
        <TextField name="image" type="file" fullWidth onChange={onChangeFile}/>
      </Box>
      <Button type="submit" onClick={createPost} variant="outlined">
        Save
      </Button>
    </Box>
  );
};

export default AddPostForm;