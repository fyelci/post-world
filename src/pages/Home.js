import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grow from '@material-ui/core/Grow';

import Header from '../components/Header';
import PostCard from '../components/PostCard';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';


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
    axios.get(`http://localhost:3001/api/posts`)
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
            {posts.map((card, index) => (
              <Grow
                in={true}
                key={card._id}
                style={{ transformOrigin: '0 0 0' }}
                {...({ timeout: 1000 * index })}
              >
                <PostCard card={card}/>
              </Grow>
            ))}
          </Grid>
        </Container>
      </main>

      <Footer/>

    </React.Fragment>
  );
}
