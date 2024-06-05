"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  console.log(posts)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="mb-4">
            <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
              <h2 className="text-2xl font-bold">{post.title}</h2>
            </Link>
            <p className='text-lg font-bold'>Author: {post.author}</p>
            <p className='text-lg'>Published: {post.date}</p>
            <p className="text-lg">{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
