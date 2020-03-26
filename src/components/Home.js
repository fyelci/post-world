import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Header from './Header';
import PostCard from './PostCard';
import SubHeader from './SubHeader';
import Footer from './Footer';


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));



export default function Home() {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`http://ec2co-ecsel-15xpk1flld7ze-1331902818.us-east-1.elb.amazonaws.com:3001/api/posts`)
      .then(res => {
        setPosts(res.data.posts);
      });
  });


  return (
    <React.Fragment>
      <CssBaseline />
      <Header />

      <SubHeader/>

      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {posts.map((card) => (
              <PostCard key={card._id} card={card}/>
            ))}
          </Grid>
        </Container>
      </main>

      <Footer/>

    </React.Fragment>
  );
}
