import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "./Firebase";
import firebase from "firebase";
import "./TweetBox.css";
function TweetBox() {
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const addPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      avatar:
        "https://avatars1.githubusercontent.com/u/56771492?s=460&u=4afd2f2ce7b4b534ffe9ac137326d80d511c79d7&v=4",
      displayName: "Mohit Malviya",
      image: image,
      text: desc,
      username: "mohitmalviya",
      verified: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://avatars1.githubusercontent.com/u/56771492?s=460&u=4afd2f2ce7b4b534ffe9ac137326d80d511c79d7&v=4" />
          <input
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Whats happening?"
            type="input"
          />
          <input
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter Image URL"
            type="input"
          />
        </div>
        <Button
          onClick={addPost}
          disabled={!desc}
          value="submit"
          className="tweet_button"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
