import React from 'react';
import Home from './Home';

export default {
  title: 'Home',
  component: Home,
};

export const FooterStory = () => <Home />;

FooterStory.story = {
  name: 'Home with 4 posts',
};
