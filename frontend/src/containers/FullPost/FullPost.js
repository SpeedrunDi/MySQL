import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Box, Container, Typography} from "@mui/material";
import {getOneNews} from "../../store/actions/newsActions";
import {deleteMessage, getMessages, postMessage} from "../../store/actions/messagesActions";
import Message from "../../components/Message/Message";
import AddMessageForm from "../../components/AddMessageForm/AddMessageForm";
import Spinner from "../../components/UI/Spinner/Spinner";

const FullPost = ({match}) => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.newsData.post);
  const messages = useSelector(state => state.messagesData.messages);
  const loading = useSelector(state => state.newsData.loading);
  const messagesLoading = useSelector(state => state.messagesData.loading);

  useEffect(() => {
    dispatch(getOneNews(match.params.id));
    dispatch(getMessages(match.params.id));
  }, [dispatch, match]);

  const onDeleteMessage = async id => {
    await dispatch(deleteMessage(id));
    dispatch(getMessages(match.params.id));
  };

  const onSendComment = async commentData => {
    await dispatch(postMessage(commentData, match.params.id));
    dispatch(getMessages(match.params.id));
  };

  if (post) {
    post.datetime = new Date(post.datetime);
  }

  return post && (
    <Container>
      {loading ? <Spinner/> : (
        <>
          <Box marginBottom="30px">
            <Typography variant="h4">
              {post.title}
            </Typography>
            <Typography color="gray">
              {post.datetime.toString()}
            </Typography>
            <Typography lineHeight="2" fontSize="18px"  >
              {post.description}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" textAlign="center">
              Comments
            </Typography>
            {messagesLoading ? <Spinner/> : (
              <Box paddingY="20px" sx={{maxHeight: "400px", overflowY: "scroll"}}>
                {messages ?
                  messages.map(message => (
                    <Message
                      key={message.id + 'message'}
                      message={message}
                      onDelete={onDeleteMessage}
                    />
                  )) : <Typography textAlign="center">No comments</Typography>
                }
              </Box>
            )}
          </Box>
        </>
      )}
      <AddMessageForm onSend={onSendComment}/>
    </Container>
  );
};

export default FullPost;