import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Box, Container, Typography} from "@mui/material";
import {getOneNews} from "../../store/actions/newsActions";
import {getMessages} from "../../store/actions/messagesActions";
import Message from "../../components/Message/Message";

const FullPost = ({match}) => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.newsData.post);
  const messages = useSelector(state => state.messagesData.messages);

  useEffect(() => {
    dispatch(getOneNews(match.params.id));
    dispatch(getMessages(match.params.id));
  }, []);

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
          {post.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cum iste laborum magni pariatur repudiandae sed. Aliquid nihil nostrum quibusdam sit voluptates. Adipisci assumenda eveniet illum ipsa labore magni mollitia voluptates. Animi atque commodi dignissimos dolor eligendi fugiat incidunt, labore minima odit perspiciatis provident quas qui quidem repellendus repudiandae rerum sint suscipit, tempore tenetur vero! A accusantium amet animi asperiores, aut blanditiis consequatur debitis dignissimos dolorum eos error et exercitationem fugiat incidunt inventore ipsa iure iusto laudantium magnam modi nemo, nihil nisi nulla odit officia quae quasi quidem quos saepe, sapiente sint vel voluptate voluptatibus. Ab aliquam asperiores eveniet magni.
        </Typography>
      </Box>
      <Box height="400px">
        <Typography variant="h3">
          Comments
        </Typography>
        {messages ?
          messages.map(message => (
            <Message message={message}/>
          )) : <Typography textAlign="center">No comment</Typography>
        }
      </Box>
    </Container>
  );
};

export default FullPost;