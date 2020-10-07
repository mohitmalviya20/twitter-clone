import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./Firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            posts: doc.data(),
          }))
        );
      });
  }, []);
  console.log(post);
  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <div>
        <TweetBox />
        <FlipMove>
          {post.map((post) => (
            <Post
              id={post.id}
              avatar={post.posts.avatar}
              displayName={post.posts.displayName}
              username={post.posts.username}
              verified={post.posts.verified}
              text={post.posts.text}
              image={post.posts.image}
            />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}
export default Feed;
