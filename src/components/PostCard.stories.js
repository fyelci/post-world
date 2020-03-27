import React from 'react';
import PostCard from './PostCard';

export default {
  title: 'Post Card',
  component: PostCard,
};

const simplePost = {
  "_id": "5e7bd7c47783f4137760500b",
  "title": "The Hitchhiker's Guide to the Galaxy",
  "detail": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  "pictureUrl": "https://i.picsum.photos/id/835/300/200.jpg",
  "author": "Douglas Adams",
  "authorProfilePic": "https://i.picsum.photos/id/53/200/200.jpg",
  "publishDate": "2020-03-21T20:38:42.968Z",
};

export const BasicPost = () => <PostCard card={simplePost}/>;

const postWithoutDetail = {
  "_id": "5e7bd7c47783f4137760500b",
  "title": "The Hitchhiker's Guide to the Galaxy",
  "detail": null,
  "pictureUrl": "https://i.picsum.photos/id/835/300/200.jpg",
  "author": "Douglas Adams",
  "authorProfilePic": null,
  "publishDate": "2020-03-21T20:38:42.968Z",
};

export const PostWithoutDetailAndAuthorPicture = () => <PostCard card={postWithoutDetail}/>;



const postWithoutImage = {
  "_id": "5e7bd7c47783f4137760500b",
  "title": "The Hitchhiker's Guide to the Galaxy",
  "detail": null,
  "pictureUrl": null,
  "author": "Douglas Adams",
  "authorProfilePic": "https://i.picsum.photos/id/53/200/200.jpg",
  "publishDate": "2020-03-21T20:38:42.968Z",
};

export const PostWithoutImage = () => <PostCard card={postWithoutImage}/>;
