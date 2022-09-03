import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Box, Container, Typography} from "@mui/material";
import {getOneNews} from "../../store/actions/newsActions";
import {deleteMessage, getMessages} from "../../store/actions/messagesActions";
import Message from "../../components/Message/Message";

const FullPost = ({match}) => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.newsData.post);
  const messages = useSelector(state => state.messagesData.messages);

  useEffect(() => {
    dispatch(getOneNews(match.params.id));
    dispatch(getMessages(match.params.id));
  }, []);

  const onDeleteMessage = async id => {
    dispatch(deleteMessage(id));
    dispatch(getMessages(match.params.id));
  };

  if (post) {
    post.datetime = new Date(post.datetime);
  }

  return post && (
    <Container>
      <Box marginBottom="30px">
        <Typography variant="h3">
          {post.title}
        </Typography>
        <Typography color="gray">
          {post.datetime.toString()}
        </Typography>
        <Typography lineHeight="2" fontSize="18px">
          {post.description}
        </Typography>
      </Box>
      <Box height="400px">
        <Typography variant="h3">
          Comments
        </Typography>
        {messages ?
          messages.map(message => (
            <Message key={message.id + 'message'} message={message} onDelete={onDeleteMessage}/>
          )) : <Typography textAlign="center">No comment</Typography>
        }
      </Box>
    </Container>
  );
};

export default FullPost;