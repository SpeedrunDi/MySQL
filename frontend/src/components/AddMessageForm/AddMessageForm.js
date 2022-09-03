import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";

const AddMessageForm = ({onSend}) => {
  const [newMessage, setNewMessage] = useState({
    author: "",
    message: ""
  });

  const onChange = e => {
    const {name, value} = e.target;

    setNewMessage(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const createComment = () => {
    onSend(newMessage);

    setNewMessage({
      author: "",
      message: ""
    });
  }

  return (
    <Box>
      <Typography variant="h4" textAlign="center">
        Add comment
      </Typography>
      <Box maxWidth="520px" margin="40px auto 20px">
        <Box marginBottom="20px">
          <TextField
            name="author"
            label="Name"
            variant="outlined"
            fullWidth
            onChange={onChange}
            value={newMessage.author}
          />
        </Box>
        <Box marginBottom="20px">
          <TextField
            name="message"
            label="Comment"
            variant="outlined"
            fullWidth
            required
            onChange={onChange}
            value={newMessage.message}
          />
        </Box>
        <Button variant="outlined" type="submit" onClick={createComment}>
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default AddMessageForm;