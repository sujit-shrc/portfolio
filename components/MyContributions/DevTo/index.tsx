"use client"
import { useEffect, useState } from 'react';
import { IoMdTime } from 'react-icons/io';
import { GoLinkExternal } from 'react-icons/go';
import Image from 'next/image';
import fetchDevToPosts from './api'; 

interface DevToPost {
  id: number;
  title: string;
  cover_image: string;
  published_at: string;
  url: string;
}

const DevToPosts: React.FC = () => {
  const [posts, setPosts] = useState<DevToPost[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDevToPosts();
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
          <a
            href={post.url} 
            key={post.id}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="border border-slate-400 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer">
              <div className="relative h-40 group">
                <Image
                  src={post.cover_image}
                  alt="Post Banner"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transform group-hover:scale-105 transition-transform"
                />
              </div>
              <h2 className="text-lg md:text-xl font-semibold mt-4">
                {post.title}
              </h2>
              <div className="flex items-center mt-2">
                <IoMdTime className="mr-2" />
                {new Date(post.published_at).toLocaleDateString()}
                <span className="ml-2">
                  <GoLinkExternal />
                </span>
              </div>
            </div>
          </a>
      ))}
    </div>
  );
};

export default DevToPosts;
