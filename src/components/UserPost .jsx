
import React, { useState, useEffect } from 'react';

const UserPost = ({ id }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
    return () => {

    };
  }, [id]);

  return (
    <div>
      <h2>User Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3> Title : {post.title}</h3>
            <p> Texto  : {post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPost;
