import React from 'react';
import {Button, Grid, Typography} from "@mui/material";

const Message = ({message, onDelete}) => {
  return (
    <Grid container
          justifyContent="space-between"
          alignItems="center"
          marginBottom="30px"
          padding="10px 20px"
          sx={{border: "3px solid black"}}
    >
      <Grid item width="75%">
        <Typography variant="span" textTransform="capitalize" fontWeight="700">
          {message.author ? message.author : 'anonymous'}:
        </Typography>
        <Typography variant="span" marginLeft="10px">
          {message.message}
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="outlined" onClick={() => onDelete(message.id)}>
          Delete
        </Button>
      </Grid>
    </Grid>
  );
};

export default Message;