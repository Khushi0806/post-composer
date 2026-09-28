import { useState } from "react";
import "./App.css";

function App() {
  const [post, setPost] = useState("");
  const [platform, setPlatform] = useState("Twitter");

  const limits = {
    Twitter: 280,
    LinkedIn: 3000,
  };

  const limit = limits[platform];

  const handlePostChange = (event) => {
    setPost(event.target.value);
  };

  return (
    <div className="container">
      <h1>Post Composer</h1>

      <label>Select Platform</label>

      <select
        value={platform}
        onChange={(event) => setPlatform(event.target.value)}
      >
        <option value="Twitter">Twitter</option>
        <option value="LinkedIn">LinkedIn</option>
      </select>

      <textarea
        value={post}
        onChange={handlePostChange}
        placeholder="What do you want to share?"
      />

      <p className="counter">
        Characters: {post.length} / {limit}
      </p>

      {post.length > limit && (
        <p className="error">
          ⚠ Your post exceeds the {limit} character limit.
        </p>
      )}
    </div>
  );
}

export default App;