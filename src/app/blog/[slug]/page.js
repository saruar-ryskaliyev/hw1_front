"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (slug) {
      fetch('/data.json')
        .then(response => response.json())
        .then(data => {
          const foundPost = data.find(item => item.id.toString() === slug);
          setPost(foundPost);
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <Link href="/blog" className="text-blue-500">
        ← Back to Blog
      </Link>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg mb-4">By {post.author} on {post.date}</p>
      <p className="text-lg">{post.description}</p>
    </div>
  );
};

export default BlogPost;
