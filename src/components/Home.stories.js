import React from 'react';
import Home from './Home';

export default {
  title: 'Home',
  component: Home,
};

const posts = {
  "posts": [
    {
      "_id": "5e7bd7c47783f4137760500b",
      "title": "The Hitchhiker's Guide to the Galaxy",
      "detail": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      "pictureUrl": "https://i.picsum.photos/id/835/300/200.jpg",
      "author": "Douglas Adams",
      "authorProfilePic": "https://i.picsum.photos/id/53/200/200.jpg",
      "publishDate": "2020-03-21T20:38:42.968Z",
      "createdAt": "2020-03-25T22:14:28.250Z",
      "updatedAt": "2020-03-25T22:14:28.250Z",
      "__v": 0
    },
    {
      "_id": "5e7bd89e7783f4137760500c",
      "title": "Effectively communicate between Microservices",
      "detail": "How microservices communicate with each other can affect performance and scalability of the application. Communication between services can be synchronous or asynchronous. For this blog post, we will focus on synchronous. We have 2 common protocols at our disposal",
      "pictureUrl": "https://i.picsum.photos/id/825/300/200.jpg",
      "author": "Victor Hugo",
      "authorProfilePic": "https://i.picsum.photos/id/55/200/200.jpg",
      "publishDate": "2020-03-21T20:38:42.968Z",
      "createdAt": "2020-03-25T22:18:06.248Z",
      "updatedAt": "2020-03-25T22:18:06.248Z",
      "__v": 0
    },
    {
      "_id": "5e7bd8de7783f4137760500d",
      "title": "Design patterns for modern web APIs",
      "detail": "For the past decade, much of my professional life has evolved around making applications and (web)servers talk to each other.",
      "pictureUrl": "https://i.picsum.photos/id/815/300/200.jpg",
      "author": "Victor Hugo",
      "authorProfilePic": "https://i.picsum.photos/id/58/200/200.jpg",
      "publishDate": "2020-03-21T20:38:42.968Z",
      "createdAt": "2020-03-25T22:19:10.500Z",
      "updatedAt": "2020-03-25T22:19:10.500Z",
      "__v": 0
    },
    {
      "_id": "5e7bd9287783f4137760500e",
      "title": "Mocking HTTP requests",
      "detail": "When dealing with code that depends on external services maintaining test coverage and writing reliable tests can be challenging",
      "pictureUrl": "https://i.picsum.photos/id/805/300/200.jpg",
      "author": "Iron Man",
      "authorProfilePic": "https://i.picsum.photos/id/59/200/200.jpg",
      "publishDate": "2020-03-21T20:38:42.968Z",
      "createdAt": "2020-03-25T22:20:24.429Z",
      "updatedAt": "2020-03-25T22:20:24.429Z",
      "__v": 0
    }
  ]
};

export const FooterStory = () => <Home />;

FooterStory.story = {
  name: 'Home with 4 posts',
};
